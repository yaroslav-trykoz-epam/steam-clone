import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Game } from 'src/app/shared/models/game.model';
import { GamesService } from 'src/app/shared/services/games.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  games: Game[] = [];
  filteredGames:Game[] = [];
  searchQuery:string = '';
  genresQuery:string[]= [];
  loading = true;
  private gamesSub:Subscription;
  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
    this.games = this.gamesService.getGames();
    this.filteredGames = this.games;
    this.loading = false;
    this.gamesSub = this.gamesService.gamesChanged.subscribe(
      (games:Game[])=>{
        this.games = games;
        this.filteredGames = this.games;
        this.loading = false;
      }
    )
  }

  searchGame(query:string){
    this.searchQuery = query;
    let res = this.games.filter(el=> el.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
    this.filteredGames = res.length ? res : [];
  }
  onGenresFilter(filter:string[]){
    this.genresQuery = filter;
    let res = this.games.filter(el=> filter.includes(String(el.genre)));
    if (!this.genresQuery.length) {
      res = this.games
    }
    this.filteredGames = res;
  }
  onInput(query:string){
    if (!query.length) {
      this.searchQuery = '';
      if (this.genresQuery.length) {
        this.onGenresFilter(this.genresQuery)
      }else{
        this.filteredGames = this.games;
      }
    }
  }
}
