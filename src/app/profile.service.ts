import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { IUser } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    public http: HttpClient,
    @Inject('baseURL') public baseURL: string
  ) {
    this.baseURL += 'user/';
  }
  getUserById() {
    return this.http.get<IUser>(this.baseURL+'profile');
  }
  editUserById(user:any, file: File) {
    let form:FormData=new FormData();
    form.append("name",user.name.toString());
    form.append("email",user.email.toString());
    form.append("phoneNumber",user.phoneNumber.toString());
    user.speciality ? form.append("speciality",user.speciality.toString()) : form.append("speciality",'');
    user.hourRate ? form.append("hourRate",user.hourRate.toString()) :form.append("hourRate",'');
    form.append("role",user.role.toString());
    if(file && file.name) {

      form.append("image",file, file.name);
    }
    return this.http.put<IUser>(this.baseURL+ user._id,form);
  }
}
