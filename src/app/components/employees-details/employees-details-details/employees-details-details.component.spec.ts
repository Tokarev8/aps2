import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesDetailsDetailsComponent } from './employees-details-details.component';

describe('TutorialDetailsComponent', () => {
  let component: EmployeesDetailsDetailsComponent;
  let fixture: ComponentFixture<EmployeesDetailsDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeesDetailsDetailsComponent]
    });
    fixture = TestBed.createComponent(EmployeesDetailsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
