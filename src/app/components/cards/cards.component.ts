import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/shared/models/game.model';
import { GamesService } from 'src/app/shared/services/games.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() games: Game[] = [];
  libraryView = false;
  constructor() { }

  ngOnInit(): void {
  }

}
