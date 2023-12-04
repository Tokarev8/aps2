import { Component } from '@angular/core';
import {Department} from "../../../models/department.model";
import {DepartmentService} from "../../../services/department.service";

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css'],
})
export class AddDepartmentComponent {
  department: Department = {
    departmentName: '',
    subDepartmentName:  '',
  };
  submitted = false;

  constructor(private departmentService: DepartmentService) {}

  saveDepartment(): void {
    const data = {
      departmentName: this.department.departmentName,
      subDepartmentName: this.department.subDepartmentName
    };

    this.departmentService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
  }

  newDepartment(): void {
    this.submitted = false;
    this.department = {
      departmentName: '',
      subDepartmentName: '',
    };
  }
}
