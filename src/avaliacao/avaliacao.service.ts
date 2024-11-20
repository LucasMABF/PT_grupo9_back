import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

import { CreateAvaliacaoDto } from './dto/create-avaliacao.dto';


@Injectable()
export class AvaliacaoService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateAvaliacaoDto) {
    return this.prisma.avaliacao.create({data: {
        conteudo: data.conteudo, 
        comentarios: data.comentarios
        ? {
            create: data.comentarios.map((comentario) => ({
              texto: comentario.texto,
              user: { connect: { id: comentario.autorId } },
            })),
          }
        : undefined,
        user: {
          connect: { id: data.userId }, // Conecta ao usuário existente
        },
        disciplina: {
          connect: { id: data.disciplinaId }, // Conecta à disciplina existente
        },
      },
    });
  }

  async findAll() {
    return this.prisma.avaliacao.findMany({
      include: {
        user: true,
        professor: true,
        disciplina: true,
        comentarios: true,
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.avaliacao.findUnique({
      where: { id },
      include: {
        user: true,
        professor: true,
        disciplina: true,
        comentarios: true,
      },
    });
  }

  async update(id: number, data: Prisma.AvaliacaoUpdateInput) {
    return this.prisma.avaliacao.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.avaliacao.delete({
      where: { id },
    });
  }
}
