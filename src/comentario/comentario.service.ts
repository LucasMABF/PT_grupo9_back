import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Injectable()
export class ComentarioService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateCommentDto) {
    return await this.prisma.comentario.create({
      data,
    });
  }

  async findAll() {
    return await this.prisma.comentario.findMany({
      include: {
        user: true,
        avaliacao: true,
      },
    });
  }

  async findOne(id: number) {
    return await this.prisma.comentario.findUnique({
      where: { id },
      include: {
        user: true,
        avaliacao: true,
      },
    });
  }

  async update(id: number, data: UpdateCommentDto) {
    return await this.prisma.comentario.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return await this.prisma.comentario.delete({
      where: { id },
    });
  }
}
