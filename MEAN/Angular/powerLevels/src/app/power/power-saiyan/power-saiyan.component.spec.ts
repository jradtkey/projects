import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerSaiyanComponent } from './power-saiyan.component';

describe('PowerSaiyanComponent', () => {
  let component: PowerSaiyanComponent;
  let fixture: ComponentFixture<PowerSaiyanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerSaiyanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerSaiyanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
