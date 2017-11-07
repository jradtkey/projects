import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerSuperSaiyanFourComponent } from './power-super-saiyan-four.component';

describe('PowerSuperSaiyanFourComponent', () => {
  let component: PowerSuperSaiyanFourComponent;
  let fixture: ComponentFixture<PowerSuperSaiyanFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerSuperSaiyanFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerSuperSaiyanFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
