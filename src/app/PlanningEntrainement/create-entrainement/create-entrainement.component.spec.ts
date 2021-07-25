import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEntrainementComponent } from './create-entrainement.component';

describe('CreateEntrainementComponent', () => {
  let component: CreateEntrainementComponent;
  let fixture: ComponentFixture<CreateEntrainementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEntrainementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEntrainementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
