import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      nome: [ null, [Validators.required, Validators.minLength(3)]],
      data: [ null, Validators.required],
      exercicio: [ null, Validators.required],
      series: [ null, [Validators.required, Validators.min(1)]],
      repeticoes: [ null, [Validators.required, Validators.min(1)]],
      carga: [ null, [Validators.required, Validators.min(0)]],
    });
  }

  salvar() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}