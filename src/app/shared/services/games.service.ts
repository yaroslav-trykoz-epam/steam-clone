import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Game } from '../models/game.model';
import { LibraryService } from './library.service';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  gamesChanged = new Subject<Game[]>();
  allGenres = ['action', 'indie', 'adventure']
  games: Game[] = [
    new Game(1, 'Game Title 1', 200, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'action'),
    new Game(2, 'Game Title 2', 350, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'indie'),
    new Game(3, 'Game Title 3', 700, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'adventure'),
    new Game(4, 'Game Title 4', 160, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'action'),
    new Game(5, 'Game Title 5', 200, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'action'),
    new Game(6, 'Game Title 6', 390, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'indie'),
    new Game(7, 'Game Title 7', 510, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'indie'),
    new Game(8, 'Game Title 8', 800, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'adventure')
  ]
  constructor(private libraryService: LibraryService) { }
  

  getGames(): Game[]{
    return this.games;
  }

  addToLibrary(game:Game){
   this.libraryService.addItems(game)
   this.games = this.games.filter(el => el.id !== game.id)
   this.gamesChanged.next(this.games.slice())
  }
}
