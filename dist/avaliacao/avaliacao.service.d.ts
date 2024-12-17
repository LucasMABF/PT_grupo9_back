import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAvaliacaoDto } from './dto/create-avaliacao.dto';
import { UpdateAvaliacaoDto } from './dto/update-avaliacao.dto';
export declare class AvaliacaoService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateAvaliacaoDto): Promise<{
        userId: number;
        disciplinaId: number;
        conteudo: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
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
        professor: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nome: string;
            departamento: string;
        }[];
        disciplina: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nome: string;
        };
        comentarios: {
            userId: number;
            conteudo: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            avaliacaoId: number;
        }[];
    } & {
        userId: number;
        disciplinaId: number;
        conteudo: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
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
        professor: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nome: string;
            departamento: string;
        }[];
        disciplina: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nome: string;
        };
        comentarios: {
            userId: number;
            conteudo: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            avaliacaoId: number;
        }[];
    } & {
        userId: number;
        disciplinaId: number;
        conteudo: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: number, data: UpdateAvaliacaoDto): Promise<{
        userId: number;
        disciplinaId: number;
        conteudo: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: number): Promise<{
        userId: number;
        disciplinaId: number;
        conteudo: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
