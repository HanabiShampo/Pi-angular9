import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMatchComponent } from './list-match.component';

describe('ListMatchComponent', () => {
  let component: ListMatchComponent;
  let fixture: ComponentFixture<ListMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
