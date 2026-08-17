import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingTest } from './routing-test';

describe('RoutingTest', () => {
  let component: RoutingTest;
  let fixture: ComponentFixture<RoutingTest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoutingTest],
    }).compileComponents();

    fixture = TestBed.createComponent(RoutingTest);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
