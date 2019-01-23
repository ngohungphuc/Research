import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TransferHttpCacheModule } from '@nguniversal/common';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './404/404.component';
import { TemplatesComponent } from './templates/templates.component';
import { TutorialsComponent } from './tutorials/tutorials.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    TutorialsComponent,
    TemplatesComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    RouterModule.forRoot([
      { path: '', component: TutorialsComponent},
      { path: 'templates', component: TemplatesComponent},
      { path: '**', component: PageNotFoundComponent }
    ]),
    TransferHttpCacheModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
