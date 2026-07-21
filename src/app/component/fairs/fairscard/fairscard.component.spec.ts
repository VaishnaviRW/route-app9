import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FairscardComponent } from './fairscard.component';

describe('FairscardComponent', () => {
  let component: FairscardComponent;
  let fixture: ComponentFixture<FairscardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FairscardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FairscardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
