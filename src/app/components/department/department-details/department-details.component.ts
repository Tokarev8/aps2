import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Department} from "../../../models/department.model";
import {DepartmentService} from "../../../services/department.service";

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css'],
})
export class DepartmentDetailsComponent {
  @Input() viewMode = false;

  @Input() currentDepartment: Department = {
    departmentName: '',
    subDepartmentName: '',
  };

  message = '';

  constructor(
    private departmentService: DepartmentService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getDepartment(this.route.snapshot.params['id']);
    }
  }

  getDepartment(id: string): void {
    this.departmentService.get(id).subscribe({
      next: (data) => {
        this.currentDepartment = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  updateDepartment(): void {
    this.message = '';

    this.departmentService
      .update(this.currentDepartment.id, this.currentDepartment)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message
            ? res.message
            : 'Подразделение успешно изменено!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteDepartment(): void {
    this.departmentService.delete(this.currentDepartment.id).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/departments']);
      },
      error: (e) => console.error(e)
    });
  }
}
