import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.http.get('api/Data/Posts').subscribe(result => {
      console.log(result);
    }, error => console.error(error));
  }
}
