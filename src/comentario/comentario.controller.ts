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
import { Public } from 'src/auth/decorators/Public';
import { CurrentUser } from 'src/auth/decorators/currentUser';

@Controller('comentario')
export class ComentarioController {
  constructor(private readonly comentarioService: ComentarioService) {}

  @Post()
  async create(
    @Body(new ValidationPipe({ whitelist: true })) data: CreateCommentDto,
    @CurrentUser('sub') current_id: number,
  ) {
    return await this.comentarioService.create(data, current_id);
  }

  @Public()
  @Get()
  async findAll() {
    return await this.comentarioService.findAll();
  }

  @Public()
  @Get('byavaliacao/:id_avaliacao')
  async findAllByAvaliacao(
    @Param('id_avaliacao', ParseIntPipe) id_avaliacao: number,
  ) {
    return await this.comentarioService.findAllByAvaliacao(id_avaliacao);
  }

  @Public()
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.comentarioService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body(new ValidationPipe({ whitelist: true })) data: UpdateCommentDto,
    @CurrentUser('sub') current_id: number,
  ) {
    return await this.comentarioService.update(id, data, current_id);
  }

  @Delete(':id')
  async remove(
    @Param('id', ParseIntPipe) id: number,
    @CurrentUser('sub') current_id: number,
  ) {
    return await this.comentarioService.remove(id, current_id);
  }
}
