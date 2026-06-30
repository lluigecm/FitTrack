import { Controller, Get, Post, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { ExercicioService } from './exercicio.service';
import { CreateExercicioDto } from './exercicio.dto';

@Controller('exercicios')
export class ExercicioController {
  constructor(private service: ExercicioService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  create(@Body() dto: CreateExercicioDto) {
    return this.service.create(dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}
