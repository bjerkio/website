import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BjerkyBjerkComponent } from './bjerky-bjerk.component';

describe('BjerkyBjerkComponent', () => {
  let component: BjerkyBjerkComponent;
  let fixture: ComponentFixture<BjerkyBjerkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BjerkyBjerkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BjerkyBjerkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
