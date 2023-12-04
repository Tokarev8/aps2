import { Component } from '@angular/core';
import {AuthorizationService} from "../../services/authorization.service";


@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css'],
})
export class AuthorizationComponent {
  department: any = {
    departmentName: '',
    subDepartmentName:  '',
  };
  submitted = false;

  constructor(private authorizationService: AuthorizationService) {}

  saveDepartment(): void {
    const data = {
      departmentName: this.department.departmentName,
      subDepartmentName: this.department.subDepartmentName
    };

    this.authorizationService.create(data).subscribe({
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
