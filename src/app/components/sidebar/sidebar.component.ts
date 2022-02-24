import { Component, OnInit, Output } from '@angular/core';
import { GamesService } from 'src/app/shared/services/games.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  genresFilter:string[] = [];
  constructor(private gamesService: GamesService) { }

  allGenres = this.gamesService.allGenres;
  @Output() genresQuery = new EventEmitter<string[]>();
  ngOnInit(): void {
  }

  onCheckBox(event:string){
    if(this.genresFilter.includes(event)){
      this.genresFilter = this.genresFilter.filter(el => el !== event)
    }else{
      this.genresFilter.push(event)
    }
    this.genresQuery.emit(this.genresFilter);
    console.log(this.genresFilter);
  }
}
