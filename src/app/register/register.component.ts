import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userData: any = {}
  file: any;

  constructor(public auth:AuthService, public router: Router) { }

  ngOnInit(): void {
    // this.authSer
  }
  
  registerUser() {
    this.auth.register(this.userData, this.file)
    .subscribe((a:any) =>  {
      localStorage.setItem('token', (<any>a).token)
      this.router.navigate(['/'])
    })
  }
  onFileChange(s:any){
    this.file=s.target.files[0];
   
  }

}
