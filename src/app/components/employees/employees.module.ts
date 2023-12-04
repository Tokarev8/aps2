import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from "../../app-routing.module";
import {EmployeesListComponent} from "./employees-list/employees-list.component";
import {AddEmployeesComponent} from "./add-employees/add-employees.component";
import {EmployeesDetailsComponent} from "./employees-details/employees-details.component";


@NgModule({
  declarations: [
    EmployeesListComponent,
    EmployeesDetailsComponent,
    AddEmployeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [EmployeesListComponent]
})
export class EmployeesModule {
}
