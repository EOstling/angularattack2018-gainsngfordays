import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IMTComponent } from './imt.component';

describe('IMTComponent', () => {
  let component: IMTComponent;
  let fixture: ComponentFixture<IMTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IMTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IMTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
