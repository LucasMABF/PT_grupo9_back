import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProfessorService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(order_field?: string, order?: string, limit?: number) {
    return await this.prisma.professor.findMany({
      orderBy: [{ [order_field]: order }],
      take: limit,
      include: {
        avaliacoes: {
          include: {
            user: {
              select: {
                id: true,
                nome: true,
                departamento: true,
                curso: true,
                foto_perfil: true,
              }
            },
            professor: true,
            disciplina: true,
          }
        },
        disciplinas: true,
      }
    });
  }

  async findProfessor(id: number) {
    return await this.prisma.professor.findUnique({
      where: {
        id: id,
      },
      include: {
        avaliacoes: {
          include: {
            user: {
              select: {
                id: true,
                nome: true,
                departamento: true,
                curso: true,
                foto_perfil: true,
              }
            },
            professor: {
              select: {
                nome: true,
              }
            },
            disciplina: true,
          }
        },
        disciplinas: true,
      }
    });
  }
}
