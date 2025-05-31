import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeatherApiResponse } from '../../Shared/Interfaces/Wheaterapp';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }
  //Get Each City Weather Information form API
  getWeather(city:string):Observable<WeatherApiResponse>{
    return this.http.get<WeatherApiResponse>(`http://api.weatherapi.com/v1/current.json?key=3dfe90ce31954049b07201916253005 &q=${city}&aqi=no`)
  }
}
