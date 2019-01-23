import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { locales } from './locales.values';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  locales = [];
  currentUrl = "";

  constructor(
    @Inject(LOCALE_ID) public locale: string,
    private router: Router
  ) { }

  ngOnInit() {

    this.locales = locales;

    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
     .subscribe((event:NavigationEnd) => {
       this.currentUrl = this.router.url;
     });

  }
}
