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
  getAllDoctor(){
    let role:any = {role: 'doctor'}
    return this.http.get<IUser[]>(this.baseURL+'role',role );
  }
  getDoctorById(id: number) {
    return this.http.get<IUser>(this.baseURL + id);
  }
  editDoctorById(id: number) {
    return this.http.get<IUser>(this.baseURL + id);
  }
  deleteDoctorById(id: number) {
    return this.http.get<IUser>(this.baseURL + id);
  }
}
