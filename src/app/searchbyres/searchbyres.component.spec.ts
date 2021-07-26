import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbyresComponent } from './searchbyres.component';

describe('SearchbyresComponent', () => {
  let component: SearchbyresComponent;
  let fixture: ComponentFixture<SearchbyresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchbyresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchbyresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
