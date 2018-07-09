import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BjerkDogComponent } from './bjerk-dog.component';

describe('BjerkDogComponent', () => {
  let component: BjerkDogComponent;
  let fixture: ComponentFixture<BjerkDogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BjerkDogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BjerkDogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
