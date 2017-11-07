import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerSuperSaiyanComponent } from './power-super-saiyan.component';

describe('PowerSuperSaiyanComponent', () => {
  let component: PowerSuperSaiyanComponent;
  let fixture: ComponentFixture<PowerSuperSaiyanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerSuperSaiyanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerSuperSaiyanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
