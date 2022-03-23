import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Medicine } from '../medicine';

@Component({
  selector: 'app-medicine-card',
  templateUrl: './medicine-card.component.html',
  styleUrls: ['./medicine-card.component.css'],
})
export class MedicineCardComponent implements AfterViewInit, OnInit {
  @Input() medicine: Medicine = new Medicine(
    0,
    'Panadol',
    '20/10/2024',
    0,
    'This product is a combination of aspirin, acetaminophen, and caffeine. It is used for the temporary relief of pain from conditions such as muscle aches, toothaches, menstrual cramps, or headaches (including migraine). Aspirin and acetaminophen relieve pain by keeping your body from making certain natural substances. Caffeine helps increase the effects of aspirin and acetaminophen.',
    '',
    0
  );
  isLong: boolean = false;
  smallDescribtion: string;
  restOfDescribtion: string;
  @ViewChild('a') a: ElementRef;
  @ViewChild('a2') a2: ElementRef;
  @ViewChild('more') more: ElementRef;
  constructor() {}
  ngOnInit() {
    if (this.medicine.describtion.split(' ').length > 30) this.isLong = true;
    this.smallDescribtion = this.medicine.describtion
      .split(' ')
      .slice(0, 30)
      .join(' ');
    this.restOfDescribtion = this.medicine.describtion
      .split(' ')
      .slice(30)
      .join(' ');
  }
  ngAfterViewInit(): void {}
  showHide() {
    if (this.more.nativeElement.style.display == 'none') {
      this.more.nativeElement.style.display = 'inline';
      this.a2.nativeElement.style.display = 'inline';
      this.a.nativeElement.style.display = 'none';
    } else {
      this.more.nativeElement.style.display = 'none';
      this.a2.nativeElement.style.display = 'none';
      this.a.nativeElement.style.display = 'inline';
    }
  }
}
