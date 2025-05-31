import { Component, OnInit } from '@angular/core';
import { WeatherApiResponse } from '../Shared/Interfaces/Wheaterapp';
import { WeatherService } from '../Services/Weather/weather.service';
import { NgIf, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-weahter-card',
  imports: [NgIf,NgTemplateOutlet],
  templateUrl: './weahter-card.component.html',
  styleUrl: './weahter-card.component.css'
})
export class WeahterCardComponent implements OnInit{
  Weather!:WeatherApiResponse
  city:string = 'New Dehli'
  constructor(private Weatherservices:WeatherService){}
  ngOnInit(): void {
    this.Weatherservices.getWeather(this.city).subscribe((data)=>{
      this.Weather = data
    })
  }
  getweatherIcons(condition: string, temp_c: string): string {
    const temperature = parseFloat(temp_c); // تبدیل رشته به عدد
    if (isNaN(temperature)) {
      console.error('Invalid temperature value:', temp_c);
      return ''; // مقدار پیش‌فرض در صورت نامعتبر بودن temp_c
    }
  
    if (condition === 'cloud') {
      return temperature > 25 
        ? 'M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6-11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z' 
        : 'sdfsf';
    }
  
    return ''; // مقدار پیش‌فرض در صورتی که شرط برقرار نباشد
  }
}
