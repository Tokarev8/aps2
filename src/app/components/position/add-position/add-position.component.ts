import { Component } from '@angular/core';
import {Position} from "../../../models/position.model";
import {PositionService} from "../../../services/position.service";

@Component({
  selector: 'app-add-position',
  templateUrl: './add-position.component.html',
  styleUrls: ['./add-position.component.css'],
})
export class AddPositionComponent {
  position: Position = {
    title: '',
    salary: 0,
  };
  submitted = false;

  constructor(private positionService: PositionService) {}

  savePosition(): void {
    const data = {
      title: this.position.title,
      salary: this.position.salary
    };

    this.positionService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
  }

  newPosition(): void {
    this.submitted = false;
    this.position = {
      title: '',
      salary: 0,
    };
  }
}
