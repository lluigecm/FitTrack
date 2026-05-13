import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioItem } from './exercicio-item';

describe('ExercicioItem', () => {
  let component: ExercicioItem;
  let fixture: ComponentFixture<ExercicioItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExercicioItem],
    }).compileComponents();

    fixture = TestBed.createComponent(ExercicioItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
