import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-treino-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './treino-form.html',
  styleUrl: './treino-form.scss'
})
export class TreinoForm {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      data: ['', Validators.required],
      exercicios: this.fb.array([this.novoExercicio()])
    });
  }

  get exercicios(): FormArray {
    return this.form.get('exercicios') as FormArray;
  }

  novoExercicio(): FormGroup {
    return this.fb.group({
      exercicio: ['', Validators.required],
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
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}