import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { ClinicService } from '../clinic.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit,OnDestroy {

  constructor(public clinicSer:ClinicService,public userSer:UserService) { }
  items: MenuItem[]=[];
  activeItem: MenuItem={};
  profileObj:any;
  @Input() role:any="";
  @Input() profileName:string="";
  details = true;
  calendar=false;
  edit=false;
  baseurl:string= "http://localhost:8080/images/"
  value:Date[]=[];

  updatedUser = {
    name:"",
    email:"",
    role:"",
    hourRate:"",
    phoneNumber:"",
    speciality:""
  }
  updatedClinic = {
    name:"",
    email:"",
    new_phone_numbers:"",
    empty_rooms:"",
    location:"",
    doctors:"",
    patients:"",
    appointments:"",
    employees:""
  }

  updateUser(id:number,user:any){
    return this.userSer.updateUser(id,user).subscribe(a => console.log(a))
  }

  updateClinic(id:number,clinic:any){
    return this.clinicSer.updateClinic(id,clinic).subscribe(a=>console.log(a))
  }
  

  ngOnInit(): void {
    //if this.isPatient ? :
    this.items = [
      {label: 'Details', icon: 'pi pi-fw pi-home',command:()=>{
        this.details = true;
        this.calendar = false;
        this.edit = false
      }},
      {label: 'Calendar', icon: 'pi pi-fw pi-calendar',command:()=>{
        this.details = false;
        this.calendar = true;
        this.edit = false;
      }},
      {label: 'Edit', icon: 'pi pi-fw pi-pencil',command:()=>{
        this.details = false;
        this.calendar = false;
        this.edit = true;
      }},
      {label: 'Delete', icon: 'pi pi-trash' , command:()=>{
        if(this.profileObj.location){
          this.clinicSer.deleteClinic(this.profileObj._id).subscribe(a=>console.log(a))
        }
      }}
  ];
  this.activeItem = this.items[0];

    if(this.userSer.userRole == "doctor" || this.userSer.userRole == "employee"){
      this.profileObj = this.userSer.user;
    } else {
      this.profileObj = this.clinicSer.clinicObj;
    }

    this.value.push(new Date("2022-03-14")) 


  }

  ngOnDestroy(): void {

  }

}
