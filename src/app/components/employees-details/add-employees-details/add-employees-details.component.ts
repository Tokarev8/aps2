import {Component, OnInit} from '@angular/core';

import {EmployeesDetails} from "../../../models/employees-details.model";
import {EmployeesDetailsService} from "../../../services/employees-details.service";
import {filter, map, Observable} from "rxjs";
import {Employees} from "../../../models/employees.model";
import {EmployeesService} from "../../../services/employees.service";

@Component({
  selector: 'app-add-employees-details',
  templateUrl: './add-employees-details.component.html',
  styleUrls: ['./add-employees-details.component.css'],
})
export class AddEmployeesDetailsComponent implements OnInit{
  employeesDetails: EmployeesDetails = {
    passportID: 0,
    telephone:  0,
    email: '',
    address: '',
    education: '',
    inn: 0,
    employeesID: 0
  };
  submitted = false;

  public employeesID: number = 0;
  public employeesError: boolean = false;

  public employees: Observable<Employees[]> = new Observable<Employees[]>();



  constructor(
    private employeesService: EmployeesService,
    private employeesDetailsService: EmployeesDetailsService) {}

  ngOnInit() {
    this.employees = this.employeesService.getAll().pipe(
      map(employees => employees.filter(item => !item?.cardDetailsID))
    );
  }

  saveEmployeesDetails(): void {

    const data = {
      passportID: this.employeesDetails.passportID,
      telephone:  this.employeesDetails.telephone,
      email: this.employeesDetails.email,
      address: this.employeesDetails.address,
      education: this.employeesDetails.education,
      inn: this.employeesDetails.inn,
      employeesID: this.employeesID
    };

    if (data.employeesID) {
      this.employeesError = false;
      this.employeesDetailsService.create(data).subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
    } else {
      this.employeesError = true;
    }


  }

  newEmployeesDetails(): void {
    this.submitted = false;
    this.employeesDetails = {
      passportID: 0,
      telephone:  0,
      email: '',
      address: '',
      education: '',
      inn: 0,
      employeesID: 0
    };
  }

  getName(item: any): string {
    return item.surname + " " + item.name
  }

  touchendEmployees() {
    this.employeesError = !this.employeesID
  }
}
