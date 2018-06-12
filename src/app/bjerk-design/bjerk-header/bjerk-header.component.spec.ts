import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BjerkHeaderComponent } from './bjerk-header.component';

describe('BjerkHeaderComponent', () => {
  let component: BjerkHeaderComponent;
  let fixture: ComponentFixture<BjerkHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BjerkHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BjerkHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
