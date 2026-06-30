import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

export interface Exercicio {
  id: number;
  nome: string;
  categoria: string;
}

@Injectable({ providedIn: 'root' })
export class ExercicioService {
  private url = `${environment.apiUrl}/exercicios`;

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
