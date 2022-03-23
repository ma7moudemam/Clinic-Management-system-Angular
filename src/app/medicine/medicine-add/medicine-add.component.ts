import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedicineService } from 'src/app/medicine.service';
import { Medicine } from '../medicine';

@Component({
  selector: 'app-medicine-add',
  templateUrl: './medicine-add.component.html',
  styleUrls: ['./medicine-add.component.css'],
})
export class MedicineAddComponent implements OnInit {
  medicine: Medicine = new Medicine(0, '', '', 0, '', '', 0);
  file: any;
  constructor(public medicineService: MedicineService, public router: Router) {}
  ngOnInit(): void {}
  addNewMedicine() {
    this.medicineService
      .addMedicine(this.medicine, this.file)
      .subscribe((data) => {
        this.router.navigate(['/medicine']);
      });
  }
  onFileChange(s: any) {
    this.file = s.target.files[0];
  }
}
