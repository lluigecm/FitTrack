import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TreinoService, Treino } from '../../services/treino.service';

@Component({
  selector: 'app-treino-detalhe',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './treino-detalhe.html',
  styleUrl: './treino-detalhe.scss',
})
export class TreinoDetalhe implements OnInit {
  treino?: Treino;
  carregando = true;
  erro = '';

  constructor(
    private route: ActivatedRoute,
    private treinoService: TreinoService,
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.treinoService.buscar(id).subscribe({
      next: (treino) => {
        this.treino = treino;
        this.carregando = false;
      },
      error: () => {
        this.erro = 'Não foi possível carregar este treino.';
        this.carregando = false;
      },
    });
  }

  formatarData(data: string): string {
    const [year, month, day] = data.split('T')[0].split('-');
    return `${day}/${month}/${year}`;
  }

  get totalSeries(): number {
    return this.treino?.exercicios.reduce((acc, ex) => acc + ex.series, 0) ?? 0;
  }
}
