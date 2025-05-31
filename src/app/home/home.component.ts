import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { WeahterCardComponent } from "../weahter-card/weahter-card.component";
@Component({
  selector: 'app-home',
  imports: [HeaderComponent, WeahterCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
}
