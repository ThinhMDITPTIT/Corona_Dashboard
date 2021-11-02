import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrdChartComponent } from './crd-chart.component';

describe('CrdChartComponent', () => {
  let component: CrdChartComponent;
  let fixture: ComponentFixture<CrdChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrdChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrdChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
