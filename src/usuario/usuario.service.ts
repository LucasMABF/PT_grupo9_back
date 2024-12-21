import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuarioService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateUsuarioDto) {
    const existingUser = await this.findByEmail(data.email);
    if (existingUser) {
      throw new ConflictException('Este e-mail já está sendo usado.');
    }
    const hashedPassword = await bcrypt.hash(data.senha, 10);
    return await this.prisma.user.create({
      data: {
        ...data,
        senha: hashedPassword,
      },
      select: {
        id: true,
        nome: true,
        email: true,
        departamento: true,
        curso: true,
        createdAt: true,
        foto_perfil: true,
        updatedAt: true,
        comentarios: true,
        avaliacoes: true,
      },
    });
  }

  async findByEmail(email: string) {
    if (!email) {
      return null;
    }
    const user = await this.prisma.user.findUnique({ where: { email } });

    if (!user) {
      return null;
    }
    return user;
  }

  async findAll() {
    return await this.prisma.user.findMany({
      select: {
        id: true,
        nome: true,
        email: true,
        departamento: true,
        curso: true,
        createdAt: true,
        foto_perfil: true,
        updatedAt: true,
        comentarios: true,
        avaliacoes: true,
      },
    });
  }

  async findUser(id: number) {
    const user = await this.prisma.user.findUnique({
      select: {
        id: true,
        nome: true,
        email: true,
        departamento: true,
        curso: true,
        createdAt: true,
        foto_perfil: true,
        updatedAt: true,
        comentarios: true,
        avaliacoes: true,
      },
      where: { id },
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found.`);
    }

    return user;
  }

  async remove(id: number) {
    return await this.prisma.user.delete({
      where: { id },
    });
  }

  async update(id: number, data: UpdateUsuarioDto) {
    const hashedPassword = data.senha
      ? await bcrypt.hash(data.senha, 10)
      : undefined;

    return await this.prisma.user.update({
      where: { id },
      data: hashedPassword
        ? {
            ...data,
            senha: hashedPassword,
          }
        : data,
      select: {
        id: true,
        nome: true,
        email: true,
        departamento: true,
        curso: true,
        createdAt: true,
        foto_perfil: true,
        updatedAt: true,
        comentarios: true,
        avaliacoes: true,
      },
    });
  }
}
