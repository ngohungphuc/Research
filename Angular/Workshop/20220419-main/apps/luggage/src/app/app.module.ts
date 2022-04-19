import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
//import { LuggageFeatureCheckinModule } from '@flight-workspace/luggage/feature-checkin';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
//import { LuggageFeatureReportLossModule } from '@flight-workspace/luggage/feature-report-loss';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    //LuggageFeatureCheckinModule,
    HttpClientModule,
    //LuggageFeatureReportLossModule,
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'check-in',
      },
      {
        path: 'check-in',
        loadChildren: () =>
          import('@flight-workspace/luggage/feature-checkin').then(
            (m) => m.LuggageFeatureCheckinModule
          ),
      },
      {
        path: 'report-loss',
        loadChildren: () =>
          import('@flight-workspace/luggage/feature-report-loss').then(
            (m) => m.LuggageFeatureReportLossModule
          ),
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
