import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesDetailsListComponent } from './employees-details-list.component';

describe('TutorialsListComponent', () => {
  let component: EmployeesDetailsListComponent;
  let fixture: ComponentFixture<EmployeesDetailsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeesDetailsListComponent]
    });
    fixture = TestBed.createComponent(EmployeesDetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
