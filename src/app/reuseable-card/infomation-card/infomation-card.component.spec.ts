import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfomationCardComponent } from './infomation-card.component';

describe('InfomationCardComponent', () => {
  let component: InfomationCardComponent;
  let fixture: ComponentFixture<InfomationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfomationCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfomationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
