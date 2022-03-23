import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
// import { User } from './_models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseurl: string = 'http://localhost:8080/';
    
  constructor(public http:HttpClient) { 
  }

  login(user:any){
    return this.http.post(this.baseurl+'login',user);
  }

  register(user:any, file: File) {
    let form:FormData=new FormData();
    form.append("name",user.name.toString());
    form.append("email",user.email.toString());
    form.append("phoneNumber",user.phoneNumber.toString());
    user.speciality ? form.append("speciality",user.speciality.toString()) : form.append("speciality",'');
    user.hourRate ? form.append("hourRate",user.hourRate.toString()) :form.append("hourRate",'');
    form.append("password",user.password.toString());
    form.append("role",user.role.toString());
    form.append("image",file,file.name);
    return this.http.post(this.baseurl+ 'register',form);
  }
  loggedIn(){
    return !!localStorage.getItem('token')
  }

  isAdmin() {
    return localStorage.getItem('role') === 'admin'
  }
}
