import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
 
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    if(this.router.url === '/homepage'){
      this.router.navigateByUrl('/homepage(home:games)')
    }
  }

}
