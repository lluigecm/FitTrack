import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ExercicioModule } from './exercicio/exercicio.module';
import { TreinoModule } from './treino/treino.module';

@Module({
  imports: [PrismaModule, ExercicioModule, TreinoModule],
})
export class AppModule {}
