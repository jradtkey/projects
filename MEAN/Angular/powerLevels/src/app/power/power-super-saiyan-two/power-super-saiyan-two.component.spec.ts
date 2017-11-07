import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerSuperSaiyanTwoComponent } from './power-super-saiyan-two.component';

describe('PowerSuperSaiyanTwoComponent', () => {
  let component: PowerSuperSaiyanTwoComponent;
  let fixture: ComponentFixture<PowerSuperSaiyanTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerSuperSaiyanTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerSuperSaiyanTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
