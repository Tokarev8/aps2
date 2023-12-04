import {Component} from '@angular/core';
import {Department} from "../../../models/department.model";
import {EmployeesDetails} from "../../../models/employees-details.model";
import {EmployeesDetailsService} from "../../../services/employees-details.service";

@Component({
  selector: 'app-employees-details-list',
  templateUrl: './employees-details-list.component.html',
  styleUrls: ['./employees-details-list.component.css'],
})
export class EmployeesDetailsListComponent {
  employeesDetails?: EmployeesDetails[];
  currentemployeesDetails: EmployeesDetails = {};
  currentIndex = -1;
  passportID = '';

  constructor(private employeesDetailsService: EmployeesDetailsService) {
  }

  ngOnInit(): void {
    this.retrieveDepartment();
  }

  retrieveDepartment(): void {
    this.employeesDetailsService.getAll().subscribe({
      next: (data) => {
        this.employeesDetails = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  refreshList(): void {
    this.retrieveDepartment();
    this.currentemployeesDetails = {};
    this.currentIndex = -1;
  }

  setActiveEmployeesDetails(department: Department, index: number): void {
    this.currentemployeesDetails = department;
    this.currentIndex = index;
  }

  removeAllEmployeesDetails(): void {
    this.employeesDetailsService.deleteAll().subscribe({
      next: (res) => {
        console.log(res);
        this.refreshList();
      },
      error: (e) => console.error(e)
    });
  }

  searchPassportID(): void {
    this.currentemployeesDetails = {};
    this.currentIndex = -1;

    this.employeesDetailsService.findByPassportID(this.passportID).subscribe({
      next: (data) => {
        this.employeesDetails = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }
}
