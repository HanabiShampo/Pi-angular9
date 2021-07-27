import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatematchComponent } from './updatematch.component';

describe('UpdatematchComponent', () => {
  let component: UpdatematchComponent;
  let fixture: ComponentFixture<UpdatematchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatematchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatematchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
