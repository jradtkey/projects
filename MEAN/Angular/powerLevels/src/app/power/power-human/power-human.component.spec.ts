import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerHumanComponent } from './power-human.component';

describe('PowerHumanComponent', () => {
  let component: PowerHumanComponent;
  let fixture: ComponentFixture<PowerHumanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerHumanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerHumanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
