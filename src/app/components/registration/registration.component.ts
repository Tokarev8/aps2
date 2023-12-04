import { Component } from '@angular/core';
import {RegistrationService} from "../../services/registration.service";


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  department: any = {
    departmentName: '',
    subDepartmentName:  '',
  };
  submitted = false;

  constructor(private registrationService: RegistrationService) {}

  saveDepartment(): void {
    const data = {
      departmentName: this.department.departmentName,
      subDepartmentName: this.department.subDepartmentName
    };

    this.registrationService.create(data).subscribe({
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
