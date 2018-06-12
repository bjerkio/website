import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BjerkLogoComponent } from './bjerk-logo.component';

describe('BjerkLogoComponent', () => {
  let component: BjerkLogoComponent;
  let fixture: ComponentFixture<BjerkLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BjerkLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BjerkLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
