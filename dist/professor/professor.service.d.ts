import { PrismaService } from 'src/prisma/prisma.service';
export declare class ProfessorService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(order_field?: string, order?: string, limit?: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nome: string;
        departamento: string;
    }[]>;
    findProfessor(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nome: string;
        departamento: string;
    }>;
}
