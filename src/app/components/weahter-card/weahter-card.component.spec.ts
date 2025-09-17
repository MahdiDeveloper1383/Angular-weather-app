import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeahterCardComponent } from './weahter-card.component';

describe('WeahterCardComponent', () => {
  let component: WeahterCardComponent;
  let fixture: ComponentFixture<WeahterCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeahterCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeahterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
