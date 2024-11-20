import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AvaliacaoService } from './avaliacao.service';
import { CreateAvaliacaoDto } from './dto/create-avaliacao.dto';
import { UpdateAvaliacaoDto } from './dto/update-avaliacao.dto';

@Controller('avaliacao')
export class AvaliacaoController {
  constructor(private readonly avaliacaoService: AvaliacaoService) {}

  // Método para criar uma nova avaliação
  @Post()
  create(@Body() createAvaliacaoDto: CreateAvaliacaoDto) {
    return this.avaliacaoService.create(createAvaliacaoDto);
  }

  // Método para buscar todas as avaliações
  @Get()
  findAll() {
    return this.avaliacaoService.findAll();
  }

  // Método para buscar uma única avaliação pelo ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.avaliacaoService.findOne(+id); // `+id` converte string para número
  }

  // Método para atualizar uma avaliação pelo ID
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAvaliacaoDto: UpdateAvaliacaoDto) {
    return this.avaliacaoService.update(+id, updateAvaliacaoDto);
  }

  // Método para remover uma avaliação pelo ID
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.avaliacaoService.remove(+id);
  }
}
