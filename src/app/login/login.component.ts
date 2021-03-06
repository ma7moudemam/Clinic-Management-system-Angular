import { Router, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userData: any = {}
  constructor(public auth:AuthService, public router: Router) { }

  ngOnInit(): void {
    this.auth
  }

  loginUser() {
    console.log(this.userData)
    this.auth.login(this.userData)
    .subscribe((a:any) =>  {
      localStorage.setItem('token', (<any>a).token)
      localStorage.setItem('role', (<any>a).role)
      this.router.navigate(['/'])
    })
  }

}
