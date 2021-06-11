import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiaInputComponent } from './paia-input.component';

describe('PaiaInputComponent', () => {
  let component: PaiaInputComponent;
  let fixture: ComponentFixture<PaiaInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaiaInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaiaInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
