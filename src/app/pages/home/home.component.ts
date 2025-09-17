import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { WeahterCardComponent } from "../../components/weahter-card/weahter-card.component";
import { FooterComponent } from "../../components/footer/footer.component";
@Component({
  selector: 'app-home',
  imports: [HeaderComponent, WeahterCardComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
}
