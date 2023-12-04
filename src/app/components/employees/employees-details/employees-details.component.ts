import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EmployeesDetails} from "../../../models/employees-details.model";
import {EmployeesDetailsService} from "../../../services/employees-details.service";
import {Employees} from "../../../models/employees.model";
import {EmployeesService} from "../../../services/employees.service";
import {Observable} from "rxjs";
import {Department} from "../../../models/department.model";
import {DepartmentService} from "../../../services/department.service";
import {PositionService} from "../../../services/position.service";
import {Position} from "../../../models/position.model";

@Component({
  selector: 'app-employees-details',
  templateUrl: './employees-details.component.html',
  styleUrls: ['./employees-details.component.css'],
})
export class EmployeesDetailsComponent implements OnInit, OnChanges{
  @Input() viewMode = false;

  @Input() currentEmployees: Employees = {
    name: '',
    surname: '',
    secondName: '',
    gender: '',
    departmentID: 0,
    cardDetailsID: 0,
    positionID: 0,
  };

  public position: Observable<Position> = new Observable<Position>();
  public cardsDetail: Observable<EmployeesDetails> = new Observable<EmployeesDetails>();
  public department: Observable<Department> = new Observable<Department>();
  public cardsDetails: Observable<EmployeesDetails[]> = new Observable<EmployeesDetails[]>();
  public departments: Observable<Department[]> = new Observable<Department[]>();
  public positions: Observable<Position[]> = new Observable<Position[]>();


  message = '';

  constructor(
    private employeesService: EmployeesService,
    private employeesDetailsService: EmployeesDetailsService,
    private positionService: PositionService,
    private departmentService: DepartmentService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getEmployee(this.route.snapshot.params['id']);
      this.cardsDetails = this.employeesDetailsService.getAll();
      this.departments = this.departmentService.getAll();
      this.positions = this.positionService.getAll();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    this.cardsDetail = this.employeesDetailsService.get(this.currentEmployees.cardDetailsID);
    this.department = this.departmentService.get(this.currentEmployees.departmentID);
    this.position = this.positionService.get(this.currentEmployees.positionID);

  }

  getEmployee(id: string): void {
    this.employeesService.get(id).subscribe({
      next: (data) => {
        this.currentEmployees = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  updateEmployees(): void {
    this.message = '';

    this.employeesService
      .update(this.currentEmployees.id, this.currentEmployees)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message
            ? res.message
            : 'Сотрудник успешно изменен!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteEmployees(): void {
    this.employeesService.delete(this.currentEmployees.id).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/employees']);
      },
      error: (e) => console.error(e)
    });
  }

  getDepartmentName(item: Department) {
    return item.subDepartmentName
  }

  getDepartmentId(item: Department) {
    return item.id
  }

  getPasportID(item: EmployeesDetails) {
    return item.passportID;
  }

  getCardId(item: EmployeesDetails) {
    return item.id;
  }

  getPositionId(item: Position) {
    return item.id;
  }
}
