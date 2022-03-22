import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineCardComponent } from './medicine-card.component';

describe('MedicineCardComponent', () => {
  let component: MedicineCardComponent;
  let fixture: ComponentFixture<MedicineCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicineCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicineCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
