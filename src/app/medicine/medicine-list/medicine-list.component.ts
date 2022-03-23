import { Component, OnInit } from '@angular/core';
import { MedicineService } from 'src/app/medicine.service';
import { Medicine } from '../medicine';

@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.css'],
})
export class MedicineListComponent implements OnInit {
  medicineList: Medicine[] = [
    new Medicine(0, 'panadol', '', 0, 'lorem'),
    new Medicine(0, 'essam', '', 0, 'lorem ipsum'),
    new Medicine(0, 'essam', '', 0, 'lorem ipsum'),
    new Medicine(0, 'essam', '', 0, 'lorem ipsum'),
    new Medicine(0, 'essam', '', 0, 'lorem ipsum'),
    new Medicine(0, 'essam', '', 0, 'lorem ipsum'),
    new Medicine(0, 'essam', '', 0, 'lorem ipsum'),
    new Medicine(0, 'essam', '', 0, 'lorem ipsum'),
    new Medicine(0, 'essam', '', 0, 'lorem ipsum'),
    new Medicine(0, 'essam', '', 0, 'lorem ipsum'),
    new Medicine(0, 'essam', '', 0, 'lorem ipsum'),
    new Medicine(0, 'essam', '', 0, 'lorem ipsum'),
  ];
  constructor(public medicineService: MedicineService) {}

  ngOnInit(): void {
    // this.medicineService.getAllMedicines().subscribe({
    //   next: (data) => (this.medicineList = data),
    // });
  }
}
