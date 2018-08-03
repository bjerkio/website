import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRecruitComponent } from './page-recruit.component';

describe('PageRecruitComponent', () => {
  let component: PageRecruitComponent;
  let fixture: ComponentFixture<PageRecruitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageRecruitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageRecruitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
