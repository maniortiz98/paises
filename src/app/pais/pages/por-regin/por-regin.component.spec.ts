import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorReginComponent } from './por-regin.component';

describe('PorReginComponent', () => {
  let component: PorReginComponent;
  let fixture: ComponentFixture<PorReginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorReginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PorReginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
