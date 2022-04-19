import { FlightCancellingService } from './flight-cancelling.service';
import { Injectable } from '@angular/core';

@Injectable()
export class DefaultFlightCancellingService implements FlightCancellingService {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    show(flightId: number): void {
        alert('not implemented yet!');
    }

}
