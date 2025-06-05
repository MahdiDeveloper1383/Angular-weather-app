import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WeatherDeatailsComponent } from './weather-deatails/weather-deatails.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'weather/:city',
        component:WeatherDeatailsComponent
    }
];
