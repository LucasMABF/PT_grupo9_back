import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  async create(
    @Body(new ValidationPipe({ whitelist: true })) userData: CreateUsuarioDto,
  ) {
    return await this.usuarioService.create(userData);
  }

  @Get()
  async findAll() {
    return await this.usuarioService.findAll();
  }

  @Get(':id')
  async findUser(@Param('id', ParseIntPipe) id: number) {
    return await this.usuarioService.findUser(id);
  }

  @Delete(':id')
  async deleteUser(@Param('id', ParseIntPipe) id: number) {
    return await this.usuarioService.remove(id);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body(new ValidationPipe({ whitelist: true })) data: UpdateUsuarioDto,
  ) {
    return await this.usuarioService.update(id, data);
  }
}
