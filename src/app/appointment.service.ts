import { Appointment } from './appointment/appointment';
import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(
    public http: HttpClient, 
    @Inject('baseURL') public baseURL: string) 
    {
      this.baseURL += 'appointment/';
    }

    getAllAppointments() {
      return this.http.get<Appointment[]>(this.baseURL);
    }

    getAppintmentById(id: number) {
      // return this.http.get<>(this.baseURL + id);
    }

    addAppointment(appointment:any){

    }
}
