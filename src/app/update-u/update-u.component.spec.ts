import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUComponent } from './update-u.component';

describe('UpdateUComponent', () => {
  let component: UpdateUComponent;
  let fixture: ComponentFixture<UpdateUComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateUComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
