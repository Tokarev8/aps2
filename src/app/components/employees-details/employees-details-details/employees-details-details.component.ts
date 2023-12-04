import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EmployeesDetails} from "../../../models/employees-details.model";
import {EmployeesDetailsService} from "../../../services/employees-details.service";

@Component({
  selector: 'app-employees-details-details',
  templateUrl: './employees-details-details.component.html',
  styleUrls: ['./employees-details-details.component.css'],
})
export class EmployeesDetailsDetailsComponent {
  @Input() viewMode = false;

  @Input() currentEmployeesDetails: EmployeesDetails = {
    passportID: 0,
    telephone: 0,
    email: '',
    address: '',
    education: '',
    inn: 0,
  };

  message = '';

  constructor(
    private employeesDetailsService: EmployeesDetailsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getDepartment(this.route.snapshot.params['id']);
    }
  }

  getDepartment(id: string): void {
    this.employeesDetailsService.get(id).subscribe({
      next: (data) => {
        this.currentEmployeesDetails = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  updateEmployeesDetails(): void {
    this.message = '';

    this.employeesDetailsService
      .update(this.currentEmployeesDetails.id, this.currentEmployeesDetails)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message
            ? res.message
            : 'Карточка успешно изменена!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteEmployeesDetails(): void {
    this.employeesDetailsService.delete(this.currentEmployeesDetails.id).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/employees-details']);
      },
      error: (e) => console.error(e)
    });
  }
}
