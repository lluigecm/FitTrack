import { Component } from '@angular/core';
import { ExercicioItem } from '../../shared/exercicio-item/exercicio-item';

@Component({
  selector: 'app-exercicios',
  imports: [ ExercicioItem ],
  templateUrl: './exercicios.html',
  styleUrl: './exercicios.scss',
})
export class Exercicios {}
