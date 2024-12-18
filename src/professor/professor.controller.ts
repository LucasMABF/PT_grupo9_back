import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ProfessorService } from './professor.service';

@Controller('professor')
export class ProfessorController {
  constructor(private readonly professorService: ProfessorService) {}

  @Get()
  async findAll() {
    return await this.professorService.findAll();
  }

  @Get(':order_field/:order')
  async findAllSort(@Param("order_field") order_field: string, @Param("order") order: string) {
    return await this.professorService.findAll(order_field, order);
  }

  @Get(':order_field/:order/:limit')
  async findSort(@Param("order_field") order_field: string, @Param("order") order: string, @Param("limit", ParseIntPipe) limit: number) {
    return await this.professorService.findAll(order_field, order, limit);
  }

  @Get(':id')
  async findUser(@Param('id', ParseIntPipe) id: number) {
    return await this.professorService.findProfessor(id);
  }
}
