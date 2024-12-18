import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
  ParseIntPipe,
} from '@nestjs/common';
import { ComentarioService } from './comentario.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Controller('comentario')
export class ComentarioController {
  constructor(private readonly comentarioService: ComentarioService) {}

  @Post()
  async create(
    @Body(new ValidationPipe({ whitelist: true })) data: CreateCommentDto,
  ) {
    return await this.comentarioService.create(data);
  }

  @Get()
  async findAll() {
    return await this.comentarioService.findAll();
  }

  @Get('byavaliacao/:id_avaliacao')
  async findAllByAvaliacao(@Param('id_avaliacao', ParseIntPipe) id_avaliacao: number) {
    return await this.comentarioService.findAllByAvaliacao(id_avaliacao);
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.comentarioService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body(new ValidationPipe({ whitelist: true })) data: UpdateCommentDto,
  ) {
    return await this.comentarioService.update(id, data);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return await this.comentarioService.remove(id);
  }
}
