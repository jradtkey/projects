import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerSuperSaiyanThreeComponent } from './power-super-saiyan-three.component';

describe('PowerSuperSaiyanThreeComponent', () => {
  let component: PowerSuperSaiyanThreeComponent;
  let fixture: ComponentFixture<PowerSuperSaiyanThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerSuperSaiyanThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerSuperSaiyanThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
