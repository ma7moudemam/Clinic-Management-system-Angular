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
  addMedicine(medicine: any, file: File) {
    let form: FormData = new FormData();
    form.append('name', medicine.name.toString());
    form.append('exp_date', medicine.exp_date.toString());
    form.append('quantity', medicine.quantity);
    form.append('describtion', medicine.describtion.toString());
    form.append('image', file, file.name);
    form.append('price', medicine.price);
    return this.http.post(this.baseURL, form);
  }
}
