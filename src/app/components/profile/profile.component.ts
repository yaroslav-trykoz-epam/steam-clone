import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { NgForm } from '@angular/forms';
import { ProfileService } from 'src/app/shared/services/profile.service';
import { User } from '../login/user.model';
import { Profile } from 'src/app/shared/models/profile.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {

  constructor(private authService: AuthService, private profileService: ProfileService) { }

  userSub:Subscription;
  profileSub: Subscription;
  userEmail:string;
  userAge:number;
  userName: string;
  ngOnInit(): void {
    if(this.authService.user){
      this.userSub = this.authService.user.subscribe(
        (user) =>{
          if(!user){
            this.userEmail = '';
          }
          this.userEmail = user.email;
        }
      )
    }
    this.profileSub = this.profileService.userProfile.subscribe(
      (profiles) =>{
        this.userName = profiles[0].username
        this.userAge = profiles[0].age
        this.userEmail = profiles[0].email;
      }
    )
  }
  onSubmit(form: NgForm){
    if (!form.valid) {
      return;
    }
    const username = form.value.username;
    const email = form.value.email;
    const age = form.value.age;
    const newProfileInfo = new Profile(username, email, age);
    this.profileService.addItems(newProfileInfo);
    form.reset()
  }
  ngOnDestroy(): void {
      this.userSub.unsubscribe()
  }
}
