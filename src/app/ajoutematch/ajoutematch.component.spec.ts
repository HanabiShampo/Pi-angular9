import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutematchComponent } from './ajoutematch.component';

describe('AjoutematchComponent', () => {
  let component: AjoutematchComponent;
  let fixture: ComponentFixture<AjoutematchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutematchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutematchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
