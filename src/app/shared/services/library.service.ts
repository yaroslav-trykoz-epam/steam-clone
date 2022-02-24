import { Injectable } from '@angular/core';
import { Game } from '../models/game.model';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  items: Game[] = [];

  constructor() { }

  addItems(game: Game){
    this.items.push(game);
  }
  getItems() {
    return this.items;
  }
}
