import { Component, OnInit } from '@angular/core';
import {Position} from "../../../models/position.model";
import {PositionService} from "../../../services/position.service";

@Component({
  selector: 'app-positions-list',
  templateUrl: './positions-list.component.html',
  styleUrls: ['./positions-list.component.css'],
})
export class PositionsListComponent {
  positions?: Position[];
  currentPosition: Position = {};
  currentIndex = -1;
  title = '';

  constructor(private positionService: PositionService) {}

  ngOnInit(): void {
    this.retrievePosition();
  }

  retrievePosition(): void {
    this.positionService.getAll().subscribe({
      next: (data) => {
        this.positions = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  refreshList(): void {
    this.retrievePosition();
    this.currentPosition = {};
    this.currentIndex = -1;
  }

  setActivePosition(position: Position, index: number): void {
    this.currentPosition = position;
    this.currentIndex = index;
  }

  removeAllPositions(): void {
    this.positionService.deleteAll().subscribe({
      next: (res) => {
        console.log(res);
        this.refreshList();
      },
      error: (e) => console.error(e)
    });
  }

  searchTitle(): void {
    this.currentPosition = {};
    this.currentIndex = -1;

    this.positionService.findByTitle(this.title).subscribe({
      next: (data) => {
        this.positions = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }
}
