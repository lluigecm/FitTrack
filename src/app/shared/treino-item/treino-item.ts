import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-treino-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './treino-item.html',
  styleUrl: './treino-item.scss'
})
export class TreinoItem {
  @Input() nome = '';
  @Input() data = '';
  @Output() remover = new EventEmitter<void>();
}
