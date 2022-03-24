import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ClinicService } from '../clinic.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
@Input() name:string = "";
@Input() clinic:any =null;
@Input() user:any =null;
baseurl:string= "http://localhost:8080/images/"
 
getProfile(id:number){
    if(this.user?.role === "doctor" || this.user?.role === "employee"){
      return this.userSer.getUserById(id).subscribe(a =>{
        this.userSer.user = a;
        this.userSer.userRole = a.role;
        this.router.navigate(["/profile"]);
      })
    }

    return this.clinicSer.getClinic(id).subscribe(a =>{
      this.clinicSer.clinicObj = a
      this.router.navigate(["/profile"])
    })
  }
  constructor(public clinicSer:ClinicService,public router:Router, public userSer:UserService) { }

  ngOnInit(): void {
  }

}
