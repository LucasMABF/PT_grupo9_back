import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
export declare class ComentarioService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateCommentDto): Promise<{
        userId: number;
        conteudo: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        avaliacaoId: number;
    }>;
    findAll(): Promise<({
        user: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            nome: string;
            senha: string;
            departamento: string;
            curso: string;
            foto_perfil: Buffer | null;
        };
        avaliacao: {
            userId: number;
            disciplinaId: number;
            conteudo: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        userId: number;
        conteudo: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        avaliacaoId: number;
    })[]>;
    findOne(id: number): Promise<{
        user: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            nome: string;
            senha: string;
            departamento: string;
            curso: string;
            foto_perfil: Buffer | null;
        };
        avaliacao: {
            userId: number;
            disciplinaId: number;
            conteudo: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        userId: number;
        conteudo: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        avaliacaoId: number;
    }>;
    update(id: number, data: UpdateCommentDto): Promise<{
        userId: number;
        conteudo: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        avaliacaoId: number;
    }>;
    remove(id: number): Promise<{
        userId: number;
        conteudo: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        avaliacaoId: number;
    }>;
}
