import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  // patient/chart => male , female
  constructor(
    public http: HttpClient,
    @Inject('baseURL') public baseURL: string
  ) {
    this.baseURL += 'patient/';
  }

  getPatientInvoice() {
    return this.http.get<any>(this.baseURL+'chart');
  }
}
