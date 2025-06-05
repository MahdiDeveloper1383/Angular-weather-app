import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDeatailsComponent } from './weather-deatails.component';

describe('WeatherDeatailsComponent', () => {
  let component: WeatherDeatailsComponent;
  let fixture: ComponentFixture<WeatherDeatailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherDeatailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherDeatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
