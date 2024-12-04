import { Component, OnInit } from '@angular/core';
import { GetweatherService } from '../services/getweather.service';

@Component({
  selector: 'app-weather',
  standalone: false,
  
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent{

  location: string = '';
  weatherInfo: any;


  constructor(private service: GetweatherService) { }

  getWeather() {
    this.service.getWeatherDetails(this.location).then((response) => response.json()).then((data) => this.weatherInfo = data);
  }
}
