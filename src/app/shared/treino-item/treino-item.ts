import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-treino-item',
  standalone: true,
  templateUrl: './treino-item.html',
  styleUrl: './treino-item.scss'
})


export class TreinoItem {
  @Input() nome = '';
  @Input() data = '';
}
