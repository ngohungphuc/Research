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
    const query = `?query=
    {
      posts (id:10){
        id
        title
        body
        userId
        comment {
          id
          email
          body
          name
          postId
        }
      }
    }`;
    this.http.get(`graphql/query=${query}`).subscribe(result => {
      console.log(result);
    }, error => console.error(error));
  }
}
