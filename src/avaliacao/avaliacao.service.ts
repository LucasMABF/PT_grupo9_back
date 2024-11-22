import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

import { CreateAvaliacaoDto } from './dto/create-avaliacao.dto';
import { UpdateAvaliacaoDto } from './dto/update-avaliacao.dto';

@Injectable()
export class AvaliacaoService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateAvaliacaoDto) {
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
          connect: { id: data.userId },
        },
        disciplina: {
          connect: { id: data.disciplinaId },
        },
      },
    });
  }

  async findAll() {
    return await this.prisma.avaliacao.findMany({
      include: {
        user: true,
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
        user: true,
        professor: true,
        disciplina: true,
        comentarios: true,
      },
    });
  }

  async update(id: number, data: UpdateAvaliacaoDto) {
    return await this.prisma.avaliacao.update({
      where: { id },
      data: {
        conteudo: data.conteudo,
        user: data.userId ? { connect: { id: data.userId } } : undefined,
        disciplina: data.disciplinaId
          ? { connect: { id: data.disciplinaId } }
          : undefined,
        comentarios: data.comentarios
          ? {
              create: data.comentarios.map((comentario) => ({
                conteudo: comentario.texto,
                user: { connect: { id: comentario.autorId } },
              })),
            }
          : undefined,
      },
    });
  }

  async remove(id: number) {
    return await this.prisma.avaliacao.delete({
      where: { id },
    });
  }
}
