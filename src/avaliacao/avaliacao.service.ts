import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

import { CreateAvaliacaoDto } from './dto/create-avaliacao.dto';
import { UpdateAvaliacaoDto } from './dto/update-avaliacao.dto';

@Injectable()
export class AvaliacaoService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateAvaliacaoDto, current_id: number) {
    return await this.prisma.avaliacao.create({
      data: {
        conteudo: data.conteudo,
        comentarios: data.comentarios
          ? {
              create: data.comentarios.map((comentario) => ({
                conteudo: comentario.texto,
                user: { connect: { id: comentario.autorId } },
              })),
            }
          : undefined,
        user: {
          connect: { id: current_id },
        },
        disciplina: {
          connect: { id: data.disciplinaId },
        },
        professor: {
          connect: { id: data.professorId },
        },
      },
    });
  }

  async findAll(order_field?: string, order?: string, limit?: number) {
    return await this.prisma.avaliacao.findMany({
      orderBy: [{ [order_field]: order }],
      take: limit,
      include: {
        user: {
          select: {
            nome: true,
            departamento: true,
            curso: true,
            foto_perfil: true,
          },
        },
        professor: true,
        disciplina: true,
        comentarios: true,
      },
    });
  }

  async findOne(id: number) {
    return await this.prisma.avaliacao.findUnique({
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
        professor: true,
        disciplina: true,
        comentarios: true,
      },
    });
  }

  async update(id: number, data: UpdateAvaliacaoDto, current_id: number) {
    const avaliacao = await this.prisma.avaliacao.findUnique({
      where: { id },
    });

    if (!avaliacao) {
      throw new NotFoundException(`Avaliação with ID ${id} not found.`);
    }

    if (avaliacao.userId !== current_id) {
      throw new UnauthorizedException();
    }

    return await this.prisma.avaliacao.update({
      where: { id },
      data: {
        conteudo: data.conteudo,
      },
    });
  }

  async remove(id: number, current_id: number) {
    const avaliacao = await this.prisma.avaliacao.findUnique({
      where: { id },
    });

    if (!avaliacao) {
      throw new NotFoundException(`Avaliação with ID ${id} not found.`);
    }

    if (avaliacao.userId !== current_id) {
      throw new UnauthorizedException();
    }

    return await this.prisma.avaliacao.delete({
      where: { id },
    });
  }
}
