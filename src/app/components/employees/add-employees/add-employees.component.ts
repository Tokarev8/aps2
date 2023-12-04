import {Component, OnInit} from '@angular/core';
import {EmployeesDetailsService} from "../../../services/employees-details.service";
import {Employees} from "../../../models/employees.model";
import {EmployeesService} from "../../../services/employees.service";
import {EmployeesDetails} from "../../../models/employees-details.model";
import {Observable} from "rxjs";
import {Department} from "../../../models/department.model";
import {DepartmentService} from "../../../services/department.service";
import {Position} from "../../../models/position.model";
import {PositionService} from "../../../services/position.service";

@Component({
  selector: 'app-add-employees-',
  templateUrl: './add-employees.component.html',
  styleUrls: ['./add-employees.component.css'],
})
export class AddEmployeesComponent implements OnInit {
  employees: Employees = {
    name: '',
    surname: '',
    secondName: '',
    gender: '',
    departmentID: 0,
    cardDetailsID: 0,
    positionID: 0,
  };
  submitted = false;

  public cardsDetailsID: Observable<EmployeesDetails[]> = new Observable<EmployeesDetails[]>();
  public departments: Observable<Department[]> = new Observable<Department[]>();
  public positions: Observable<Position[]> = new Observable<Position[]>();


  public departmentID: number = 0;
  public cardDetailsID: number = 0;
  public positionID: number = 0;

  constructor(private employeesService: EmployeesService,
              private employeesDetailsService: EmployeesDetailsService,
              private positionService: PositionService,
              private departmentService: DepartmentService) {
  }

  ngOnInit() {
    this.cardsDetailsID =  this.employeesDetailsService.getAll();
    this.departments = this.departmentService.getAll();
    this.positions = this.positionService.getAll();

  }

  saveEmployees(): void {
    const data = {
      name: this.employees.name,
      surname: this.employees.surname,
      secondName: this.employees.secondName,
      gender: this.employees.gender,
      departmentID: this.departmentID,
      cardDetailsID: this.cardDetailsID,
      positionID: this.positionID
    };

    this.employeesService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
  }

  newEmployees(): void {
    this.submitted = false;
    this.employees = {
      name: '',
      surname: '',
      secondName: '',
      gender: '',
      departmentID: 0,
      cardDetailsID: 0,
      positionID: 0,
    };
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
}
