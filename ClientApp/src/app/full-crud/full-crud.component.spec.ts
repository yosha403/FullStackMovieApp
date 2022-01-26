import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullCRUDComponent } from './full-crud.component';

describe('FullCRUDComponent', () => {
  let component: FullCRUDComponent;
  let fixture: ComponentFixture<FullCRUDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullCRUDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
