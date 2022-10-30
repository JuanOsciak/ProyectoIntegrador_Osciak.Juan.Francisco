import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HysSComponent } from './hys-s.component';

describe('HysSComponent', () => {
  let component: HysSComponent;
  let fixture: ComponentFixture<HysSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HysSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HysSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
