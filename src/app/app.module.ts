import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PositionModule} from "./components/position/position.module";
import {DepartmentModule} from "./components/department/department.module";
import {EmployeesDetailsModule} from "./components/employees-details/employees-details.module";
import {EmployeesModule} from "./components/employees/employees.module";
import {AuthorizationModule} from "./components/authorization/authorization.module";
import {RegistrationModule} from "./components/registration/registration.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    PositionModule,
    DepartmentModule,
    EmployeesDetailsModule,
    EmployeesModule,
    AuthorizationModule,
    RegistrationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
