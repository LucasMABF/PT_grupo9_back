import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CommentService {
  constructor(
    private readonly prisma: PrismaService
  ) {}

  async create(data: CreateCommentDto) {
    return this.prisma.comentario.create({
         data: { userId: data.userId,
          conteudo: data.conteudo,
          avaliacaoId: data.avaliacaoId
    }})
  }

  async findAll() {
    return this.prisma.comentario.findMany();
  }

  async findOne(id: number) {
    return `This action returns a #${id} comment`;
  }

  async update(id: number, updateCommentDto: UpdateCommentDto) {
    return `This action updates a #${id} comment`;
  }

  async remove(id: number) {
    return `This action removes a #${id} comment`;
  }
}
