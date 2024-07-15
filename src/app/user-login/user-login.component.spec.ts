import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLOginComponent } from './user-login.component';

describe('UserLOginComponent', () => {
  let component: UserLOginComponent;
  let fixture: ComponentFixture<UserLOginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserLOginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLOginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
