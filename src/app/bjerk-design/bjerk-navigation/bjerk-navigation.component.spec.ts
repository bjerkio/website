import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BjerkNavigationComponent } from './bjerk-navigation.component';

describe('BjerkNavigationComponent', () => {
  let component: BjerkNavigationComponent;
  let fixture: ComponentFixture<BjerkNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BjerkNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BjerkNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
