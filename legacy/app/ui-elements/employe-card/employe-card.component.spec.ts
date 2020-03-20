import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeCardComponent } from './employe-card.component';



describe('EmpoyeCardComponent', () => {
  let component: EmployeCardComponent;
  let fixture: ComponentFixture<EmployeCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
