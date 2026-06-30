import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TreinoItem } from '../../shared/treino-item/treino-item';
import { TreinoService, Treino } from '../../services/treino.service';

@Component({
  selector: 'app-treinos',
  imports: [RouterLink, TreinoItem],
  templateUrl: './treinos.html',
  styleUrl: './treinos.scss',
})
export class Treinos implements OnInit {
  treinos: Treino[] = [];
  carregando = false;
  erro = '';

  constructor(private treinoService: TreinoService) {}

  ngOnInit() {
    this.carregar();
  }

  carregar() {
    this.carregando = true;
    this.treinoService.listar().subscribe({
      next: (data) => {
        this.treinos = data;
        this.carregando = false;
      },
      error: () => {
        this.erro = 'Erro ao carregar treinos. Verifique se a API está rodando.';
        this.carregando = false;
      },
    });
  }

  remover(id: number) {
    this.treinoService.remover(id).subscribe({
      next: () => {
        this.treinos = this.treinos.filter((t) => t.id !== id);
      },
      error: () => {
        this.erro = 'Erro ao remover treino.';
      },
    });
  }

  formatarData(data: string): string {
    const [year, month, day] = data.split('T')[0].split('-');
    return `${day}/${month}/${year}`;
  }
}
