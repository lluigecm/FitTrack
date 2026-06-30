import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateExercicioDto } from './exercicio.dto';

@Injectable()
export class ExercicioService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.exercicio.findMany({
      orderBy: { nome: 'asc' },
    });
  }

  create(dto: CreateExercicioDto) {
    return this.prisma.exercicio.create({
      data: { nome: dto.nome, categoria: dto.categoria },
    });
  }

  remove(id: number) {
    return this.prisma.exercicio.delete({ where: { id } });
  }
}
