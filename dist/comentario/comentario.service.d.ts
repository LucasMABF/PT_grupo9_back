import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
export declare class ComentarioService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateCommentDto, current_id: number): Promise<{
        conteudo: string;
        id: number;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
        avaliacaoId: number;
    }>;
    findAll(): Promise<({
        user: {
            nome: string;
            departamento: string;
            curso: string;
            foto_perfil: Buffer;
        };
        avaliacao: {
            disciplinaId: number;
            professorId: number;
            conteudo: string;
            id: number;
            userId: number;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        conteudo: string;
        id: number;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
        avaliacaoId: number;
    })[]>;
    findAllByAvaliacao(id_avaliacao: number): Promise<({
        user: {
            nome: string;
            departamento: string;
            curso: string;
            foto_perfil: Buffer;
        };
        avaliacao: {
            disciplinaId: number;
            professorId: number;
            conteudo: string;
            id: number;
            userId: number;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        conteudo: string;
        id: number;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
        avaliacaoId: number;
    })[]>;
    findOne(id: number): Promise<{
        user: {
            nome: string;
            departamento: string;
            curso: string;
            foto_perfil: Buffer;
        };
        avaliacao: {
            disciplinaId: number;
            professorId: number;
            conteudo: string;
            id: number;
            userId: number;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        conteudo: string;
        id: number;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
        avaliacaoId: number;
    }>;
    update(id: number, data: UpdateCommentDto, current_id: number): Promise<{
        conteudo: string;
        id: number;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
        avaliacaoId: number;
    }>;
    remove(id: number, current_id: number): Promise<{
        conteudo: string;
        id: number;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
        avaliacaoId: number;
    }>;
}
