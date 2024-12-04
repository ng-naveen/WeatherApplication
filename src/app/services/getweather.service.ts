import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetweatherService {

  constructor() { }

  getWeatherDetails(location: string) {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?appid=${Appid}&q=${location}&units=metric`)
  }

}
