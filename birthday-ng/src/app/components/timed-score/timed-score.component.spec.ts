import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimedScoreComponent } from './timed-score.component';

describe('TimedScoreComponent', () => {
  let component: TimedScoreComponent;
  let fixture: ComponentFixture<TimedScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimedScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimedScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
