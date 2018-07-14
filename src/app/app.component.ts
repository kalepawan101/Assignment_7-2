import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    cities =  [
        {city_name: 'Pune'},
        {city_name: 'Mumbai'},
        {city_name: 'Nasik'},
        {city_name: 'Nagar'},
        {city_name: 'Aurangabad'}
    ];
}
