import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferableView } from './deferable-view';

describe('DeferableView', () => {
  let component: DeferableView;
  let fixture: ComponentFixture<DeferableView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferableView],
    }).compileComponents();

    fixture = TestBed.createComponent(DeferableView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
