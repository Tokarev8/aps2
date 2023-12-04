import {Component} from '@angular/core';
import {Department} from "../../../models/department.model";
import {DepartmentService} from "../../../services/department.service";

@Component({
  selector: 'app-departments-list',
  templateUrl: './departments-list.component.html',
  styleUrls: ['./departments-list.component.css'],
})
export class DepartmentsListComponent {
  departments?: Department[];
  currentDepartment: Department = {};
  currentIndex = -1;
  departmentName = '';

  constructor(private departmentService: DepartmentService) {
  }

  ngOnInit(): void {
    this.retrieveDepartment();
  }

  retrieveDepartment(): void {
    this.departmentService.getAll().subscribe({
      next: (data) => {
        this.departments = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  refreshList(): void {
    this.retrieveDepartment();
    this.currentDepartment = {};
    this.currentIndex = -1;
  }

  setActiveDepartment(department: Department, index: number): void {
    this.currentDepartment = department;
    this.currentIndex = index;
  }

  removeAllDepartments(): void {
    this.departmentService.deleteAll().subscribe({
      next: (res) => {
        console.log(res);
        this.refreshList();
      },
      error: (e) => console.error(e)
    });
  }

  searchDepartmentName(): void {
    this.currentDepartment = {};
    this.currentIndex = -1;

    this.departmentService.findByDepartmentName(this.departmentName).subscribe({
      next: (data) => {
        this.departments = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  getDepartmentName(department: any): string {
    return department.subDepartmentName ? department.subDepartmentName : department.departmentName;
  }
}
