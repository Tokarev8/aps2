import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeesDetailsComponent } from './add-department.component';

describe('AddTutorialComponent', () => {
  let component: AddEmployeesDetailsComponent;
  let fixture: ComponentFixture<AddEmployeesDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEmployeesDetailsComponent]
    });
    fixture = TestBed.createComponent(AddEmployeesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
