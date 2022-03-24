import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(
    public http: HttpClient,
    @Inject('baseURL') public baseURL: string
  ) {
    this.baseURL += 'invoice/';
  }

  getInvoice() {
    return this.http.get<any>(this.baseURL+'income');
  }

  // getPatientInvoice() {
  //   return this.http.get<any>(this.baseURL+'patient');
  // }

  getInvoicesReport() {
    return this.http.get<any>(this.baseURL);
  }

}
