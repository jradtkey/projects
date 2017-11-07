import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewanswerComponent } from './newanswer.component';

describe('NewanswerComponent', () => {
  let component: NewanswerComponent;
  let fixture: ComponentFixture<NewanswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewanswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewanswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
