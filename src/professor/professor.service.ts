import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProfessorService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(order_field?: string, order?: string, limit?: number) {

    return await this.prisma.professor.findMany({
      orderBy: [
      {[order_field]: order}
      ],
      take: limit,
    });
  }

  async findProfessor(id: number) {
    return await this.prisma.professor.findUnique({
      where: {
        id: id,
      }
    });
  }
}

