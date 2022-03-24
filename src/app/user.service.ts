import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { IUser } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    public http: HttpClient,
    @Inject('baseURL') public baseURL: string
  ) {
    this.baseURL += 'user/';
  }
  user:any;
  userRole:any;
  getAllDoctor(){
    let role:any = {role: 'doctor'}
    return this.http.post<IUser[]>(this.baseURL+'role', role );
  }
  getUserById(id: number) {
    return this.http.get<IUser>(this.baseURL + id);
  }

  deleteUserById(id: number) {
    return this.http.delete<IUser>(this.baseURL + id);
  }


  getAllPatient() {
    let role:any = {role: 'patient'}
    return this.http.post<IUser[]>(this.baseURL+'role', role );
  }
  
  getAllEmployee() {
    let role:any = {role: 'employee'}
    return this.http.post<IUser[]>(this.baseURL+'role', role );
  }

  updateUser(id:number, user:any){
    return this.http.put(this.baseURL+id,user)
  }

}
