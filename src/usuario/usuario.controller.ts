import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, ValidationPipe } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { Prisma } from '@prisma/client';
import { UpdateDto } from './dto/creat-user.dto';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}
  
  @Post()
  async create(@Body(ValidationPipe) userData: CreateUsuarioDto){
    return await this.usuarioService.create(userData);
  }

  @Get()
  async findAll() {
    return await this.usuarioService.findAll();
  }

  @Get(':id')
  async findUser(@Param('id',ParseIntPipe) id : number){
    return await this.usuarioService.findUser(id)
  }

  @Delete(':id')
  async deleteUser(@Param('id',ParseIntPipe)id : number){
    return await this.usuarioService.deleteUser(id);
  }

  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body (ValidationPipe) data: UpdateDto){
    return await this.usuarioService.update(id, data);
  }
}
