import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { People } from 'src/app/shared/models/people.model';
import { FriendsService } from 'src/app/shared/services/friends.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit, OnDestroy {

  friends:People[] = [];
  users:People[] = [];
  myFriendsIds:number[] = [];
  private friendsSub:Subscription
  private usersSub: Subscription
  searchQuery:string = '';
  loading = true;
  constructor(private friendsService:FriendsService) { }

  ngOnInit(): void {
    this.friends = this.friendsService.getFriends();
    this.users = this.friendsService.getUsers();
    this.loading = false;
    this.friendsSub  = this.friendsService.friendsChanged.subscribe(
      (friends: People[]) => {
        this.friends = friends;
        this.myFriendsIds = this.friends.map((el:People) => el.id)
        this.loading = false;
      }
    )
    this.usersSub = this.friendsService.usersChanged.subscribe(
      (users: People[]) => {
        this.users = users;
      }
    )
  }
  onDeleteItem(friend: People){
    this.friendsService.deleteFriend(friend);
  }
  onAddItem(friend: People){
    this.friendsService.addFriend(friend);
  }
  onInput(data:string){
    if (!data.length) {
      this.searchQuery = ''
    }
  }
  searchFriend(query:string){
    this.searchQuery = query;
  }
  ngOnDestroy(): void {
      this.friendsSub.unsubscribe();
      this.usersSub.unsubscribe();
  }


}
