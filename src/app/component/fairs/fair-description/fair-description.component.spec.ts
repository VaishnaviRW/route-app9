import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FairDescriptionComponent } from './fair-description.component';

describe('FairDescriptionComponent', () => {
  let component: FairDescriptionComponent;
  let fixture: ComponentFixture<FairDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FairDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FairDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
