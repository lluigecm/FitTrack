import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TreinoItem } from '../../shared/treino-item/treino-item';

@Component({
  selector: 'app-treinos',
  imports: [RouterLink, TreinoItem],
  templateUrl: './treinos.html',
  styleUrl: './treinos.scss',
})
export class Treinos {}
