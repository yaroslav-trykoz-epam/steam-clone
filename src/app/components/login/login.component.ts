import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable} from 'rxjs';
import { AuthService, AuthResponseData } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  isLoginMode = true;
  isLoading = false;
  error:string = null;
  constructor(private authService: AuthService, private router: Router) { }

  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode
  }


  onSubmit(form: NgForm){
   if (!form.valid) {
     return;
   }

   let authObs:Observable<AuthResponseData>;
   const email = form.value.email;
   const password = form.value.password;

   this.isLoading = true;
   if(this.isLoginMode){
    authObs = this.authService.login(email,password)
   } else {
    authObs = this.authService.signUp(email,password)
   }
   authObs.subscribe(
    resData => {
      console.log(resData)
      this.isLoading = false;
      this.router.navigate(['/homepage'])
    },
    errorMessage => {
      console.log(errorMessage);
      this.error = errorMessage;
      this.isLoading = false;
    }
  );
    form.reset()
  }
  ngOnInit(): void {
  }

}
