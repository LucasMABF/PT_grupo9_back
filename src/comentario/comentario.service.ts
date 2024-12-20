import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Injectable()
export class ComentarioService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateCommentDto, current_id: number) {
    if (current_id !== data.userId) {
      throw new UnauthorizedException();
    }

    return await this.prisma.comentario.create({
      data,
    });
  }

  async findAll() {
    return await this.prisma.comentario.findMany({
      include: {
        user: {
          select: {
            nome: true,
            departamento: true,
            curso: true,
            foto_perfil: true,
          },
        },
        avaliacao: true,
      },
    });
  }

  async findAllByAvaliacao(id_avaliacao: number) {
    return await this.prisma.comentario.findMany({
      where: {
        avaliacaoId: id_avaliacao,
      },
      orderBy: [{ createdAt: 'asc' }],
      include: {
        user: {
          select: {
            nome: true,
            departamento: true,
            curso: true,
            foto_perfil: true,
          },
        },
        avaliacao: true,
      },
    });
  }

  async findOne(id: number) {
    return await this.prisma.comentario.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            nome: true,
            departamento: true,
            curso: true,
            foto_perfil: true,
          },
        },
        avaliacao: true,
      },
    });
  }

  async update(id: number, data: UpdateCommentDto, current_id: number) {
    const comentario = await this.prisma.comentario.findUnique({
      where: { id },
    });

    if (!comentario) {
      throw new NotFoundException(`Avaliação with ID ${id} not found.`);
    }

    if (comentario.userId !== current_id) {
      throw new UnauthorizedException();
    }

    return await this.prisma.comentario.update({
      where: { id },
      data,
    });
  }

  async remove(id: number, current_id: number) {
    const comentario = await this.prisma.comentario.findUnique({
      where: { id },
    });

    if (!comentario) {
      throw new NotFoundException(`Avaliação with ID ${id} not found.`);
    }

    if (comentario.userId !== current_id) {
      throw new UnauthorizedException();
    }

    return await this.prisma.comentario.delete({
      where: { id },
    });
  }
}
