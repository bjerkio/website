import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirchComponent } from './birch.component';

describe('BirchComponent', () => {
  let component: BirchComponent;
  let fixture: ComponentFixture<BirchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
