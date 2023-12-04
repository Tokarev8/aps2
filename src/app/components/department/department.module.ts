import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {AppRoutingModule} from "../../app-routing.module";
import {DepartmentsListComponent} from "./departments-list/departments-list.component";
import {PositionService} from "../../services/position.service";
import {DepartmentDetailsComponent} from "./department-details/department-details.component";
import {AddDepartmentComponent} from "./add-department/add-department.component";


@NgModule({
  declarations: [
    DepartmentsListComponent,
    DepartmentDetailsComponent,
    AddDepartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [PositionService],
  bootstrap: [DepartmentsListComponent]
})
export class DepartmentModule { }
