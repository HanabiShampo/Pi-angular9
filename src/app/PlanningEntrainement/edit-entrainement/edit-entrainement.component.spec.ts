import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEntrainementComponent } from './edit-entrainement.component';

describe('EditEntrainementComponent', () => {
  let component: EditEntrainementComponent;
  let fixture: ComponentFixture<EditEntrainementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEntrainementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEntrainementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
