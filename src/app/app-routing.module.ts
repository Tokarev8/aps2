import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PositionsListComponent} from "./components/position/position-list/positions-list.component";
import {PositionDetailsComponent} from "./components/position/position-details/position-details.component";
import {AddPositionComponent} from "./components/position/add-position/add-position.component";
import {DepartmentsListComponent} from "./components/department/departments-list/departments-list.component";
import {DepartmentDetailsComponent} from "./components/department/department-details/department-details.component";
import {AddDepartmentComponent} from "./components/department/add-department/add-department.component";
import {
  EmployeesDetailsListComponent
} from "./components/employees-details/employees-details-list/employees-details-list.component";
import {
  EmployeesDetailsDetailsComponent
} from "./components/employees-details/employees-details-details/employees-details-details.component";
import {
  AddEmployeesDetailsComponent
} from "./components/employees-details/add-employees-details/add-employees-details.component";
import {EmployeesListComponent} from "./components/employees/employees-list/employees-list.component";
import {EmployeesDetailsComponent} from "./components/employees/employees-details/employees-details.component";
import {AddEmployeesComponent} from "./components/employees/add-employees/add-employees.component";
import {AuthorizationComponent} from "./components/authorization/authorization.component";
import {RegistrationComponent} from "./components/registration/registration.component";

const routes: Routes = [
  // { path: '', redirectTo: 'employees', pathMatch: 'full' },
  { path: '', component: AuthorizationComponent },
  { path: 'registration', component: RegistrationComponent },


  { path: 'positions', component: PositionsListComponent },
  { path: 'positions/:id', component: PositionDetailsComponent },
  { path: 'add-position', component: AddPositionComponent },

  { path: 'departments', component: DepartmentsListComponent },
  { path: 'departments/:id', component: DepartmentDetailsComponent },
  { path: 'add-department', component: AddDepartmentComponent },

  { path: 'employees-details', component: EmployeesDetailsListComponent },
  { path: 'employees-details/:id', component: EmployeesDetailsDetailsComponent },
  { path: 'add-employees-details', component: AddEmployeesDetailsComponent },

  { path: 'employees', component: EmployeesListComponent },
  { path: 'employees/:id', component: EmployeesDetailsComponent },
  { path: 'add-employees', component: AddEmployeesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
