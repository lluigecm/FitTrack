import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTreinoDto } from './treino.dto';

@Injectable()
export class TreinoService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.treino.findMany({
      orderBy: { data: 'desc' },
      include: {
        exercicios: {
          include: { exercicio: true },
        },
      },
    });
  }

  findOne(id: number) {
    return this.prisma.treino.findUnique({
      where: { id },
      include: {
        exercicios: {
          include: { exercicio: true },
        },
      },
    });
  }

  create(dto: CreateTreinoDto) {
    return this.prisma.treino.create({
      data: {
        nome: dto.nome,
        data: new Date(dto.data),
        usuarioId: dto.usuarioId,
        exercicios: {
          create: dto.exercicios.map((ex) => ({
            exercicioId: ex.exercicioId,
            series: ex.series,
            repeticoes: ex.repeticoes,
            carga: ex.carga,
          })),
        },
      },
      include: {
        exercicios: { include: { exercicio: true } },
      },
    });
  }

  remove(id: number) {
    return this.prisma.treino.delete({ where: { id } });
  }
}
