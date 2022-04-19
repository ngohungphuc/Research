/* eslint-disable no-restricted-syntax */
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FlightCancellingService } from './flight-cancelling.service';

@Component({
  selector: 'flight-cancelling',
  templateUrl: './flight-cancelling.component.html',
  styleUrls: ['./flight-cancelling.component.css'],
})
export class FlightCancellingComponent implements OnInit {
  @Input() flightId: string | undefined;
  @Output() closed = new EventEmitter();

  constructor(private service: FlightCancellingService) {}

  ngOnInit() {
    console.debug('init');
  }

  closeHandler(): void {
    console.debug('remove');
    this.closed.emit();
  }
}
