import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
// import { User } from './_models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseurl: string = 'http://localhost:8080/login/';
    
  constructor(public http:HttpClient) { 
  }
  login(user:any){
    return this.http.post(this.baseurl,user);
  }


  loggedIn(){
    return !!localStorage.getItem('token')
  }
}
