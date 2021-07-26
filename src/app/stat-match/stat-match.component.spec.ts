import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatMatchComponent } from './stat-match.component';

describe('StatMatchComponent', () => {
  let component: StatMatchComponent;
  let fixture: ComponentFixture<StatMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatMatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
