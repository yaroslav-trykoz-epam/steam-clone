import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { People } from "../models/people.model";

@Injectable({
    providedIn: 'root'
})
export class FriendsService{
        friendsChanged = new Subject<People[]>();
        usersChanged = new Subject<People[]>();
        private myFriends: People[] = [
            new People(1, 'Bodya'),
            new People(2, 'Tigran')
        ]
        private users: People[] = [
            new People(3,'Noob_master'),
            new People(4,'Wazzup'),
            new People(5,'Alduin'),
            new People(6,'Robert'),
            new People(7,'Yarik'),
            new People(8,'Senior_vlad'),
        ]
        getFriends() {
            return this.myFriends.slice();
        }
        getUsers(){
            return this.users.slice();
        }
        addFriend(newFriend: People){
            this.myFriends.push(newFriend);
            this.users = this.users.filter(el => el.id !== newFriend.id)
            this.friendsChanged.next(this.myFriends.slice());
            this.usersChanged.next(this.users.slice())
        }
        deleteFriend(friend:People){
            this.users.push(friend);
            this.myFriends = this.myFriends.filter(el => el.id !== friend.id);
            this.usersChanged.next(this.users.slice())
            this.friendsChanged.next(this.myFriends.slice());
        }
}