import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptimizingImg } from './optimizing-img';

describe('OptimizingImg', () => {
  let component: OptimizingImg;
  let fixture: ComponentFixture<OptimizingImg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptimizingImg],
    }).compileComponents();

    fixture = TestBed.createComponent(OptimizingImg);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
