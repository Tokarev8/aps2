import {Component} from '@angular/core';
import {Department} from "../../../models/department.model";

import {Employees} from "../../../models/employees.model";
import {EmployeesService} from "../../../services/employees.service";

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css'],
})
export class EmployeesListComponent {
  employees?: Employees[];
  currentEmployees: Employees = {};
  currentIndex = -1;
  name = '';
  department = '';
  cardDetails = '';

  constructor(private employeesService: EmployeesService) {
  }

  ngOnInit(): void {
    this.retrieveEmployees();
  }

  retrieveEmployees(): void {
    this.employeesService.getAll().subscribe({
      next: (data) => {
        this.employees = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  refreshList(): void {
    this.retrieveEmployees();
    this.currentEmployees = {};
    this.currentIndex = -1;
  }

  setActiveEmployees(department: Department, index: number): void {
    this.currentEmployees = department;
    this.currentIndex = index;
  }

  removeAllEmployees(): void {
    this.employeesService.deleteAll().subscribe({
      next: (res) => {
        console.log(res);
        this.refreshList();
      },
      error: (e) => console.error(e)
    });
  }

  searchName(): void {
    this.currentEmployees = {};
    this.currentIndex = -1;

    this.employeesService.findByName(this.name).subscribe({
      next: (data) => {
        this.employees = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  test(item: Employees) {
    return `${item.surname} ${item.name} ${item.name}`;
  }
}
