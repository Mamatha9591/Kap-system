import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmtekComponent } from './amtek.component';

describe('AmtekComponent', () => {
  let component: AmtekComponent;
  let fixture: ComponentFixture<AmtekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmtekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmtekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
