import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetweatherService {

  constructor() { }

  getWeatherDetails(location: string) {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?appid=8a9658985de4c0923b73c035d84da799&q=${location}&units=metric`)
  }

}
