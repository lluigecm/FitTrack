import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreinoItem } from './treino-item';

describe('TreinoItem', () => {
  let component: TreinoItem;
  let fixture: ComponentFixture<TreinoItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreinoItem],
    }).compileComponents();

    fixture = TestBed.createComponent(TreinoItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
