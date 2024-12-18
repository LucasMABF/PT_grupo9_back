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
import { AvaliacaoService } from './avaliacao.service';
import { CreateAvaliacaoDto } from './dto/create-avaliacao.dto';
import { UpdateAvaliacaoDto } from './dto/update-avaliacao.dto';

@Controller('avaliacao')
export class AvaliacaoController {
  constructor(private readonly avaliacaoService: AvaliacaoService) {}

  @Post()
  async create(
    @Body(new ValidationPipe({ whitelist: true })) data: CreateAvaliacaoDto,
  ) {
    return await this.avaliacaoService.create(data);
  }

  @Get()
  async findAll() {
    return await this.avaliacaoService.findAll();
  }

  @Get(':order_field/:order')
  async findAllSort(@Param("order_field") order_field: string, @Param("order") order: string) {
    return await this.avaliacaoService.findAll(order_field, order);
  }

  @Get(':order_field/:order/:limit')
  async findSort(@Param("order_field") order_field: string, @Param("order") order: string, @Param("limit", ParseIntPipe) limit: number) {
    return await this.avaliacaoService.findAll(order_field, order, limit);
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.avaliacaoService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body(new ValidationPipe({ whitelist: true })) data: UpdateAvaliacaoDto,
  ) {
    return await this.avaliacaoService.update(id, data);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return await this.avaliacaoService.remove(id);
  }
}
