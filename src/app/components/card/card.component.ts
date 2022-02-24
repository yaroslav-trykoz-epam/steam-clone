import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Game } from 'src/app/shared/models/game.model';
import { GamesService } from 'src/app/shared/services/games.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() libraryView = false;
  @Input() game: Game;
  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
  }

  onAddToLibrary(){
    this.gamesService.addToLibrary(this.game);
  }
}
