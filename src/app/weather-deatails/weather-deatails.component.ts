import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { WeatherService } from '../Services/Weather/weather.service';
import { WeatherApiResponse } from '../Shared/Interfaces/Wheaterapp';
import { NgIf } from '@angular/common';
import { TimeService } from '../Services/Time/time.service';
import { TimeData } from '../Shared/Interfaces/Time';

@Component({
  selector: 'app-weather-deatails',
  imports: [NgIf],
  templateUrl: './weather-deatails.component.html',
  styleUrl: './weather-deatails.component.css'
})
export class WeatherDeatailsComponent implements OnInit{
  Weather!:WeatherApiResponse
  Time!:TimeData
  dayName!:string
  Wind_Dir!:string
  constructor(private route:ActivatedRoute,
    private WeatherServ:WeatherService,
    private TimeServ:TimeService
  ){}
  ngOnInit(): void {
    const city = this.route.snapshot.paramMap.get('city')
 
    if (city) {
      this.WeatherServ.getWeather(city).subscribe((data)=>{
        this.Weather = data
        const tz = this.Weather.location.tz_id
        const Country = this.Weather.location.country
        const City = this.Weather.location.name
        this.Time = this.TimeServ.getTimeForCity(tz,City,Country)
        this.dayName = this.TimeServ.getDayName(this.Weather.location.localtime)
      })
    }
    if (this.Weather?.current.wind_dir === 'N') {
      this.Wind_Dir = 'North';
    } else if (this.Weather?.current.wind_dir === 'S') {
      this.Wind_Dir = 'South';
    } else if (this.Weather?.current.wind_dir === 'W') {
      this.Wind_Dir = 'West';
    } else if(this.Weather?.current.wind_dir === 'E'){
      this.Wind_Dir = 'East';
    }else if(this.Weather?.current.wind_dir === 'NE'){
      this.Wind_Dir = 'North-East';
    }else if(this.Weather?.current.wind_dir === 'NW'){
      this.Wind_Dir = 'North-East';
    }else if(this.Weather?.current.wind_dir === 'SE'){
      this.Wind_Dir = 'South-East';
    }else if(this.Weather?.current.wind_dir === 'NNE'){
      this.Wind_Dir = 'North-NorthEast';
    }else if(this.Weather?.current.wind_dir === 'ENE'){
      this.Wind_Dir = 'East-NorthEast';
    }else if(this.Weather?.current.wind_dir === 'ESE'){
      this.Wind_Dir = 'East-SouthEast';
    }else if(this.Weather?.current.wind_dir === 'SSE'){
      this.Wind_Dir = 'South-SouthEast';
    }else if(this.Weather?.current.wind_dir === 'SSW'){
      this.Wind_Dir = 'South-SouthWest';
    }else if(this.Weather?.current.wind_dir === 'WSW'){
      this.Wind_Dir = 'West-SouthWest';
    }else if(this.Weather?.current.wind_dir === 'WNW'){
      this.Wind_Dir = 'West-NorthWest';
    }else {
      this.Wind_Dir = 'North-NorthWest';

    }
  }

}
