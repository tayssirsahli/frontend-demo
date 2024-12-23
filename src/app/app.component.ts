import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('http://localhost:8081/', { responseType: 'text' }).subscribe(
      (response: string) => {
        this.title = response;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
