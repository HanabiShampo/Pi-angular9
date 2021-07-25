import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutUComponent } from './ajout-u.component';

describe('AjoutUComponent', () => {
  let component: AjoutUComponent;
  let fixture: ComponentFixture<AjoutUComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutUComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
