import { Component, Input, OnInit } from '@angular/core';
import { Medicine } from '../medicine';

@Component({
  selector: 'app-medicine-card',
  templateUrl: './medicine-card.component.html',
  styleUrls: ['./medicine-card.component.css'],
})
export class MedicineCardComponent implements OnInit {
  @Input() medicine: Medicine = new Medicine(
    0,
    'Panadol',
    '20/10/2024',
    0,
    'This product is a combination of aspirin, acetaminophen, and caffeine. It is used for the temporary relief of pain from conditions such as muscle aches, toothaches, menstrual cramps, or headaches (including migraine). Aspirin and acetaminophen relieve pain by keeping your body from making certain natural substances. Caffeine helps increase the effects of aspirin and acetaminophen.',
    '',
    0
  );
  constructor() {}

  ngOnInit(): void {}
}
