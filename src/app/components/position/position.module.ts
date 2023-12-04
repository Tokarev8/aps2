import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {AppRoutingModule} from "../../app-routing.module";
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { AddEmployeesComponent } from './components/add-tutorial/add-tutorial.component';
// import { EmployeesDetailsComponent } from './components/tutorial-details/tutorial-details.component';
// import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import {PositionsListComponent} from "./position-list/positions-list.component";
import {PositionService} from "../../services/position.service";
import {PositionDetailsComponent} from "./position-details/position-details.component";
import {AddPositionComponent} from "./add-position/add-position.component";


@NgModule({
  declarations: [
    PositionsListComponent,
    PositionDetailsComponent,
    AddPositionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [PositionService],
  bootstrap: [PositionsListComponent]
})
export class PositionModule { }
