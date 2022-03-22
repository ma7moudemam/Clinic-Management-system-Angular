import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Medicine } from './medicine/medicine';

@Injectable({
  providedIn: 'root',
})
export class MedicineService {
  constructor(
    public http: HttpClient,
    @Inject('baseURL') public baseURL: string
  ) {
    this.baseURL += 'medicine/';
  }
  getAllMedicines() {
    return this.http.get<Medicine[]>(this.baseURL);
  }
  getMedicineById(id: number) {
    return this.http.get<Medicine>(this.baseURL + id);
  }
}
