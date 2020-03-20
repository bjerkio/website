import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonAvatarComponent } from './person-avatar.component';

describe('PersonAvatarComponent', () => {
  let component: PersonAvatarComponent;
  let fixture: ComponentFixture<PersonAvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonAvatarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
