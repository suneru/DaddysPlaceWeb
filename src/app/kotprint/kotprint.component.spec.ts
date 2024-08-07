import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KotprintComponent } from './kotprint.component';

describe('KotprintComponent', () => {
  let component: KotprintComponent;
  let fixture: ComponentFixture<KotprintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KotprintComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KotprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
