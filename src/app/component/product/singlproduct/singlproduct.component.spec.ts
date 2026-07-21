import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglproductComponent } from './singlproduct.component';

describe('SinglproductComponent', () => {
  let component: SinglproductComponent;
  let fixture: ComponentFixture<SinglproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglproductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
