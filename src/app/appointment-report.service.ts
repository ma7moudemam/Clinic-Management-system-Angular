import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppointmentReportService {

  constructor(
    public http: HttpClient,
    @Inject('baseURL') public baseURL: string
  ) {
    this.baseURL += 'appointment/';
  }

  getAppointmentReport() {
    return this.http.get<any>(this.baseURL+'report');
  }

}

// appointment/report