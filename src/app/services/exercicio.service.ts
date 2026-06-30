import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Exercicio {
  id: number;
  nome: string;
  categoria: string;
}

@Injectable({ providedIn: 'root' })
export class ExercicioService {
  private url = 'http://localhost:3000/api/exercicios';

  constructor(private http: HttpClient) {}

  listar() {
    return this.http.get<Exercicio[]>(this.url);
  }

  criar(nome: string, categoria: string) {
    return this.http.post<Exercicio>(this.url, { nome, categoria });
  }

  remover(id: number) {
    return this.http.delete<Exercicio>(`${this.url}/${id}`);
  }
}
