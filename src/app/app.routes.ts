import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WeatherDetailsPageComponent } from './pages/weather-details-page/weather-details-page.component';


export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'weather/:city',
        component:WeatherDetailsPageComponent
    }
];
