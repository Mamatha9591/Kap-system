import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasalaMangerComponent } from './masala-manger.component';

describe('MasalaMangerComponent', () => {
  let component: MasalaMangerComponent;
  let fixture: ComponentFixture<MasalaMangerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasalaMangerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasalaMangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
