import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverEmployeeComponent } from './discover-employee.component';

describe('DiscoverEmployeeComponent', () => {
  let component: DiscoverEmployeeComponent;
  let fixture: ComponentFixture<DiscoverEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscoverEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
