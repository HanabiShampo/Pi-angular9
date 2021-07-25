import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUComponent } from './delete-u.component';

describe('DeleteUComponent', () => {
  let component: DeleteUComponent;
  let fixture: ComponentFixture<DeleteUComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteUComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
