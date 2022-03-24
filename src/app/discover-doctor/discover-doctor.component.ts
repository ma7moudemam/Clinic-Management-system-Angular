import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-discover-doctor',
  templateUrl: './discover-doctor.component.html',
  styleUrls: ['./discover-doctor.component.css']
})
export class DiscoverDoctorComponent implements OnInit {
  clinicProfile:any={}
  doctors:any;
  getAllDoctors(){
    this.userSer.getAllDoctor().subscribe(a=>{
      console.log(a)
      this.doctors = a;
    })
  }
  constructor( public userSer:UserService) { }

  ngOnInit(): void {
    this.getAllDoctors();
  
  }

}
