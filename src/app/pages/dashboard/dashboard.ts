import { Component, OnInit } from '@angular/core';
import { Card } from '../../shared/card/card';
import { TreinoService, Treino } from '../../services/treino.service';
import { ExercicioService } from '../../services/exercicio.service';

interface BarraMes {
  label: string;
  count: number;
  altura: number;
  ativo: boolean;
}

@Component({
  selector: 'app-dashboard',
  imports: [Card],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard implements OnInit {
  private readonly meses = [
    'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
    'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez',
  ];

  treinosEsteMes = 0;
  ultimoTreino = '—';
  exerciciosCadastrados = 0;
  barras: BarraMes[] = [];
  carregando = true;

  constructor(
    private treinoService: TreinoService,
    private exercicioService: ExercicioService,
  ) {}

  ngOnInit() {
    this.exercicioService.listar().subscribe({
      next: (lista) => (this.exerciciosCadastrados = lista.length),
    });

    this.treinoService.listar().subscribe({
      next: (treinos) => {
        this.calcularEstatisticas(treinos);
        this.carregando = false;
      },
      error: () => (this.carregando = false),
    });
  }

  private calcularEstatisticas(treinos: Treino[]) {
    const hoje = new Date();

    this.treinosEsteMes = treinos.filter((t) => {
      const d = new Date(t.data);
      return (
        d.getMonth() === hoje.getMonth() &&
        d.getFullYear() === hoje.getFullYear()
      );
    }).length;

    if (treinos.length > 0) {
      this.ultimoTreino = this.formatarDataCurta(treinos[0].data);
    }

    this.barras = this.montarBarras(treinos, hoje);
  }

  private montarBarras(treinos: Treino[], hoje: Date): BarraMes[] {
    const janelas: { mes: number; ano: number }[] = [];
    for (let i = 5; i >= 0; i--) {
      const d = new Date(hoje.getFullYear(), hoje.getMonth() - i, 1);
      janelas.push({ mes: d.getMonth(), ano: d.getFullYear() });
    }

    const contagens = janelas.map((j) =>
      treinos.filter((t) => {
        const d = new Date(t.data);
        return d.getMonth() === j.mes && d.getFullYear() === j.ano;
      }).length,
    );

    const maximo = Math.max(...contagens, 1);

    return janelas.map((j, i) => ({
      label: this.meses[j.mes],
      count: contagens[i],
      altura: Math.round((contagens[i] / maximo) * 100),
      ativo: i === janelas.length - 1,
    }));
  }

  private formatarDataCurta(data: string): string {
    const [, month, day] = data.split('T')[0].split('-');
    return `${day}/${month}`;
  }
}
