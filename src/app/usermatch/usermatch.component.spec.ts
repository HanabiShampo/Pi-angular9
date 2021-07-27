import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermatchComponent } from './usermatch.component';

describe('UsermatchComponent', () => {
  let component: UsermatchComponent;
  let fixture: ComponentFixture<UsermatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsermatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsermatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
