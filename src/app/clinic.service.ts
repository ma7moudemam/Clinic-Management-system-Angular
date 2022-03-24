import { Injectable } from '@angular/core';
import { Clinic } from './models/clinic';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClinicService {
  baseurl:string = "http://localhost:8080/clinics/";
  clinics:Clinic[] =[{
    name:"clinic1",
    email:"clinic@gmail.com",
    doctors:[3,1,2],
    patients:[5,7],
    appointments:[10,52],
    employees:[5,7],
    location:["mansoura,gehan st","cairo,tahrir sq"],
    phone_number:["012256645","0114569862"],
    rooms:4,
    empty_rooms:1
  }]
  clinicObj:any;
  getAllClinics(){
    console.log("data retrived");
    return this.http.get(this.baseurl)
  }
  getClinic(id:number){
    console.log("profile retrived");
    return this.http.get(this.baseurl + id)
  }
  updateClinic(id:number,obj:any){
    return this.http.put(this.baseurl+id,obj)
  }
  deleteClinic(id:number){
    return this.http.delete(this.baseurl+id)
  }
  // getProfile(id:number){

  // }
  constructor(public http:HttpClient) { }
}
