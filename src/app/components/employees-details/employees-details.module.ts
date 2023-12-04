import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from "../../app-routing.module";
import {EmployeesDetailsListComponent} from "./employees-details-list/employees-details-list.component";
import {EmployeesDetailsDetailsComponent} from "./employees-details-details/employees-details-details.component";
import {AddEmployeesDetailsComponent} from "./add-employees-details/add-employees-details.component";

@NgModule({
  declarations: [
    EmployeesDetailsListComponent,
    EmployeesDetailsDetailsComponent,
    AddEmployeesDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [EmployeesDetailsListComponent]
})
export class EmployeesDetailsModule {
}
