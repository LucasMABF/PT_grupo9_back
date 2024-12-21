import { PrismaService } from 'src/prisma/prisma.service';
export declare class ProfessorService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(order_field?: string, order?: string, limit?: number): Promise<({
        disciplinas: {
            id: number;
            nome: string;
            createdAt: Date;
            updatedAt: Date;
        }[];
        avaliacoes: ({
            professor: {
                id: number;
                nome: string;
                departamento: string;
                createdAt: Date;
                updatedAt: Date;
            };
            user: {
                id: number;
                nome: string;
                departamento: string;
                curso: string;
                foto_perfil: Buffer;
            };
            disciplina: {
                id: number;
                nome: string;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            userId: number;
            professorId: number;
            disciplinaId: number;
            conteudo: string;
        })[];
    } & {
        id: number;
        nome: string;
        departamento: string;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findProfessor(id: number): Promise<{
        disciplinas: {
            id: number;
            nome: string;
            createdAt: Date;
            updatedAt: Date;
        }[];
        avaliacoes: ({
            professor: {
                nome: string;
            };
            user: {
                id: number;
                nome: string;
                departamento: string;
                curso: string;
                foto_perfil: Buffer;
            };
            disciplina: {
                id: number;
                nome: string;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            userId: number;
            professorId: number;
            disciplinaId: number;
            conteudo: string;
        })[];
    } & {
        id: number;
        nome: string;
        departamento: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
