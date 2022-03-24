import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverDoctorComponent } from './discover-doctor.component';

describe('DiscoverDoctorComponent', () => {
  let component: DiscoverDoctorComponent;
  let fixture: ComponentFixture<DiscoverDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscoverDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
