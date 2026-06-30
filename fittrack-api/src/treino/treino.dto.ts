export class TreinoExercicioDto {
  exercicioId: number;
  series: number;
  repeticoes: number;
  carga: number;
}

export class CreateTreinoDto {
  nome: string;
  data: string;
  usuarioId: number;
  exercicios: TreinoExercicioDto[];
}
