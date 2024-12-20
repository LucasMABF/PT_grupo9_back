import {
  Body,
  Controller,
  Delete,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { CurrentUser } from 'src/auth/decorators/currentUser';
import { Public } from 'src/auth/decorators/Public';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Public()
  @Post()
  async create(
    @Body(new ValidationPipe({ whitelist: true })) userData: CreateUsuarioDto,
  ) {
    return await this.usuarioService.create(userData);
  }

  @Delete(':id')
  async deleteUser(
    @Param('id', ParseIntPipe) id: number,
    @CurrentUser('sub') current_id: number,
  ) {
    return await this.usuarioService.remove(id, current_id);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body(new ValidationPipe({ whitelist: true })) data: UpdateUsuarioDto,
    @CurrentUser('sub') current_id: number,
  ) {
    return await this.usuarioService.update(id, data, current_id);
  }
}
