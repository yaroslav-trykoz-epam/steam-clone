import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Profile } from '../models/profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  userProfile = new Subject<Profile[]>()
  items: Profile[] = [];

  constructor() { }

  addItems(profile: Profile){
      if (this.items.length) {
          this.items = []
      }
    this.items.push(profile);
    this.userProfile.next(this.items.slice())
    console.log(this.items);
  }
  getItems() {
    return this.items.slice();
  }
}