import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

export interface TreinoExercicioPayload {
  exercicioId: number;
  series: number;
  repeticoes: number;
  carga: number;
}

export interface CreateTreinoPayload {
  nome: string;
  data: string;
  usuarioId: number;
  exercicios: TreinoExercicioPayload[];
}

export interface Treino {
  id: number;
  nome: string;
  data: string;
  exercicios: {
    id: number;
    series: number;
    repeticoes: number;
    carga: number;
    exercicio: { id: number; nome: string; categoria: string };
  }[];
}

@Injectable({ providedIn: 'root' })
export class TreinoService {
  private url = `${environment.apiUrl}/treinos`;

  constructor(private http: HttpClient) {}

  listar() {
    return this.http.get<Treino[]>(this.url);
  }

  criar(payload: CreateTreinoPayload) {
    return this.http.post<Treino>(this.url, payload);
  }

  remover(id: number) {
    return this.http.delete<Treino>(`${this.url}/${id}`);
  }
}
