import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-exercicio-item',
  standalone: true,
  templateUrl: './exercicio-item.html',
  styleUrl: './exercicio-item.scss'
})


export class ExercicioItem {
  @Input() nome = '';
  @Input() categoria = '';
}