import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercicio-item',
  standalone: true,
  templateUrl: './exercicio-item.html',
  styleUrl: './exercicio-item.scss'
})
export class ExercicioItem {
  @Input() nome = '';
  @Input() categoria = '';
  @Output() remover = new EventEmitter<void>();

  get categoriaSlug(): string {
    return this.categoria.toLowerCase().replace('í', 'i').replace('ô', 'o');
  }
}
