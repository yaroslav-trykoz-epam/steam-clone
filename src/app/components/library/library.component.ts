import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/shared/models/game.model';
import { LibraryService } from 'src/app/shared/services/library.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  constructor(private libraryService: LibraryService) { }

  libraryView = true;
  myGames: Game[];
  ngOnInit(): void {
    this.myGames =  this.libraryService.getItems();
  }

}
