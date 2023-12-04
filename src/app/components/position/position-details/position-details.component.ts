import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Position} from "../../../models/position.model";
import {PositionService} from "../../../services/position.service";

@Component({
  selector: 'app-position-details',
  templateUrl: './position-details.component.html',
  styleUrls: ['./position-details.component.css'],
})
export class PositionDetailsComponent {
  @Input() viewMode = false;

  @Input() currentPosition: Position = {
    title: '',
    salary: 0,
  };

  message = '';

  constructor(
    private positionService: PositionService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getPosition(this.route.snapshot.params['id']);
    }
  }

  getPosition(id: string): void {
    this.positionService.get(id).subscribe({
      next: (data) => {
        this.currentPosition = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }


  updatePosition(): void {
    this.message = '';

    this.positionService
      .update(this.currentPosition.id, this.currentPosition)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message
            ? res.message
            : 'Должность успешна изменена!';
        },
        error: (e) => console.error(e)
      });
  }

  deletePosition(): void {
    this.positionService.delete(this.currentPosition.id).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/positions']);
      },
      error: (e) => console.error(e)
    });
  }
}
