import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FlightLibModule } from '@flight-workspace/flight-lib';

// import { DashboardLibModule } from '@flight-workspace/dashboard-lib';

@NgModule({
  imports: [
    BrowserModule,
    FlightLibModule,
    // DashboardLibModule,
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
