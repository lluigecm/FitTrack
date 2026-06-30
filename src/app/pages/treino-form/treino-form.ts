import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { TreinoService } from '../../services/treino.service';
import { ExercicioService, Exercicio } from '../../services/exercicio.service';

@Component({
  selector: 'app-treino-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './treino-form.html',
  styleUrl: './treino-form.scss'
})
export class TreinoForm implements OnInit {
  form: FormGroup;
  salvando = false;
  erro = '';
  exerciciosCatalogo: Exercicio[] = [];

  constructor(
    private fb: FormBuilder,
    private treinoService: TreinoService,
    private exercicioService: ExercicioService,
    private router: Router,
  ) {
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      data: ['', Validators.required],
      exercicios: this.fb.array([this.novoExercicio()])
    });
  }

  ngOnInit() {
    this.exercicioService.listar().subscribe({
      next: (lista) => { this.exerciciosCatalogo = lista; },
    });
  }

  get exercicios(): FormArray {
    return this.form.get('exercicios') as FormArray;
  }

  novoExercicio(): FormGroup {
    return this.fb.group({
      exercicioId: [null, Validators.required],
      series: [null, [Validators.required, Validators.min(1)]],
      repeticoes: [null, [Validators.required, Validators.min(1)]],
      carga: [null, [Validators.required, Validators.min(0)]],
    });
  }

  adicionarExercicio() {
    this.exercicios.push(this.novoExercicio());
  }

  removerExercicio(index: number) {
    this.exercicios.removeAt(index);
  }

  salvar() {
    if (this.form.invalid) return;
    this.salvando = true;
    this.erro = '';

    const val = this.form.value;
    this.treinoService.criar({
      nome: val.nome,
      data: val.data,
      usuarioId: 1,
      exercicios: val.exercicios.map((ex: any) => ({
        exercicioId: Number(ex.exercicioId),
        series: Number(ex.series),
        repeticoes: Number(ex.repeticoes),
        carga: Number(ex.carga),
      })),
    }).subscribe({
      next: () => {
        this.router.navigate(['/treinos']);
      },
      error: () => {
        this.erro = 'Erro ao salvar treino. Verifique se a API está rodando.';
        this.salvando = false;
      },
    });
  }
}
