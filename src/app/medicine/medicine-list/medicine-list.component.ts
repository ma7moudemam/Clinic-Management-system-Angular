import { Component, OnInit } from '@angular/core';
import { MedicineService } from 'src/app/medicine.service';
import { Medicine } from '../medicine';

@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.css'],
})
export class MedicineListComponent implements OnInit {
  medicineList: Medicine[] = [];
  constructor(public medicineService: MedicineService) {}

  ngOnInit(): void {
    this.medicineService.getAllMedicines().subscribe({
      next: (data) => (this.medicineList = data),
    });
  }
}
