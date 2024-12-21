import {
  Body,
  Controller,
  Delete,
  Param,
  Get,
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

  @Get()
  async findUser(@CurrentUser('sub') current_id: number){
    return await this.usuarioService.findUser(current_id);
  }

  @Public()
  @Post()
  async create(
    @Body(new ValidationPipe({ whitelist: true })) userData: CreateUsuarioDto,
  ) {
    return await this.usuarioService.create(userData);
  }

  @Delete()
  async deleteUser(
    @CurrentUser('sub') current_id: number,
  ) {
    return await this.usuarioService.remove(current_id);
  }

  @Patch()
  async update(
    @Body(new ValidationPipe({ whitelist: true })) data: UpdateUsuarioDto,
    @CurrentUser('sub') current_id: number,
  ) {
    return await this.usuarioService.update(current_id, data);
  }
}
