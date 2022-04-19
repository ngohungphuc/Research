import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-tile',
  templateUrl: './dashboard-tile.component.html',
})
export class DashboardTileComponent implements OnInit {
  @Input() a = 0;
  @Input() b = 0;
  @Input() c = 0;

  // data for chart
  data: { name: string; value: number }[] = [];

  ngOnInit() {
    this.data = [
      {
        name: 'a',
        value: this.a,
      },
      {
        name: 'b',
        value: this.b,
      },
      {
        name: 'c',
        value: this.c,
      },
    ];
  }
}
