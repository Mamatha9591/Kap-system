import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationTechComponent } from './information-tech.component';

describe('InformationTechComponent', () => {
  let component: InformationTechComponent;
  let fixture: ComponentFixture<InformationTechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationTechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
