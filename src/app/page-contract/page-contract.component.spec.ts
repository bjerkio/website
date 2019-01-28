import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageContractComponent } from './page-contract.component';

describe('PageContractComponent', () => {
  let component: PageContractComponent;
  let fixture: ComponentFixture<PageContractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageContractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
