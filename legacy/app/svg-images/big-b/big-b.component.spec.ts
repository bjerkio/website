import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigBComponent } from './big-b.component';

describe('BigBComponent', () => {
  let component: BigBComponent;
  let fixture: ComponentFixture<BigBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
