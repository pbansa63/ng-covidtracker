import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidViewComponent } from './covid-view.component';

describe('CovidViewComponent', () => {
  let component: CovidViewComponent;
  let fixture: ComponentFixture<CovidViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
