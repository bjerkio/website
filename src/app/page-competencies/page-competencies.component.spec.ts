import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCompetenciesComponent } from './page-competencies.component';

describe('PageCompetenciesComponent', () => {
  let component: PageCompetenciesComponent;
  let fixture: ComponentFixture<PageCompetenciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCompetenciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCompetenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
