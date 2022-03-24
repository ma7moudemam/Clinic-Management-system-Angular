import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  
  logout(){
    localStorage.clear();
    this.router.navigate(["/login"])
  }
  constructor(public authService:AuthService,public router:Router) { }

  ngOnInit(): void {
  }

}
