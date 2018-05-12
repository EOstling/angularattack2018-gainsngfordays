import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImtListItemsComponent } from './imt-list-items.component';

describe('ImtListItemsComponent', () => {
  let component: ImtListItemsComponent;
  let fixture: ComponentFixture<ImtListItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImtListItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImtListItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
