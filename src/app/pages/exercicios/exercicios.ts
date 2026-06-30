import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ExercicioItem } from '../../shared/exercicio-item/exercicio-item';
import { ExercicioService, Exercicio } from '../../services/exercicio.service';

@Component({
  selector: 'app-exercicios',
  imports: [FormsModule, ExercicioItem],
  templateUrl: './exercicios.html',
  styleUrl: './exercicios.scss',
})
export class Exercicios implements OnInit {
  novoNome = '';
  novaCategoria = 'Peito';
  categorias = ['Peito', 'Costas', 'Pernas', 'Ombro', 'Bíceps', 'Tríceps', 'Abdômen'];

  exercicios: Exercicio[] = [];
  carregando = false;
  erro = '';

  constructor(private exercicioService: ExercicioService) {}

  ngOnInit() {
    this.carregar();
  }

  carregar() {
    this.carregando = true;
    this.exercicioService.listar().subscribe({
      next: (data) => {
        this.exercicios = data;
        this.carregando = false;
      },
      error: () => {
        this.erro = 'Erro ao carregar exercícios. Verifique se a API está rodando.';
        this.carregando = false;
      },
    });
  }

  adicionar() {
    const nome = this.novoNome.trim();
    if (!nome) return;

    this.exercicioService.criar(nome, this.novaCategoria).subscribe({
      next: (novo) => {
        this.exercicios.push(novo);
        this.novoNome = '';
        this.novaCategoria = 'Peito';
      },
      error: () => {
        this.erro = 'Erro ao adicionar exercício.';
      },
    });
  }

  remover(index: number) {
    const ex = this.exercicios[index];
    this.exercicioService.remover(ex.id).subscribe({
      next: () => {
        this.exercicios.splice(index, 1);
      },
      error: () => {
        this.erro = 'Erro ao remover exercício.';
      },
    });
  }
}
