import { AvaliacaoService } from './avaliacao.service';
import { CreateAvaliacaoDto } from './dto/create-avaliacao.dto';
import { UpdateAvaliacaoDto } from './dto/update-avaliacao.dto';
export declare class AvaliacaoController {
    private readonly avaliacaoService;
    constructor(avaliacaoService: AvaliacaoService);
    create(data: CreateAvaliacaoDto, current_id: number): Promise<{
        disciplinaId: number;
        professorId: number;
        conteudo: string;
        id: number;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<({
        user: {
            nome: string;
            departamento: string;
            curso: string;
            foto_perfil: Buffer;
        };
        professor: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nome: string;
            departamento: string;
        };
        disciplina: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nome: string;
        };
        comentarios: {
            conteudo: string;
            id: number;
            userId: number;
            createdAt: Date;
            updatedAt: Date;
            avaliacaoId: number;
        }[];
    } & {
        disciplinaId: number;
        professorId: number;
        conteudo: string;
        id: number;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findAllSort(order_field: string, order: string): Promise<({
        user: {
            nome: string;
            departamento: string;
            curso: string;
            foto_perfil: Buffer;
        };
        professor: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nome: string;
            departamento: string;
        };
        disciplina: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nome: string;
        };
        comentarios: {
            conteudo: string;
            id: number;
            userId: number;
            createdAt: Date;
            updatedAt: Date;
            avaliacaoId: number;
        }[];
    } & {
        disciplinaId: number;
        professorId: number;
        conteudo: string;
        id: number;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findSort(order_field: string, order: string, limit: number): Promise<({
        user: {
            nome: string;
            departamento: string;
            curso: string;
            foto_perfil: Buffer;
        };
        professor: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nome: string;
            departamento: string;
        };
        disciplina: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nome: string;
        };
        comentarios: {
            conteudo: string;
            id: number;
            userId: number;
            createdAt: Date;
            updatedAt: Date;
            avaliacaoId: number;
        }[];
    } & {
        disciplinaId: number;
        professorId: number;
        conteudo: string;
        id: number;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findOne(id: number): Promise<{
        user: {
            nome: string;
            departamento: string;
            curso: string;
            foto_perfil: Buffer;
        };
        professor: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nome: string;
            departamento: string;
        };
        disciplina: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nome: string;
        };
        comentarios: {
            conteudo: string;
            id: number;
            userId: number;
            createdAt: Date;
            updatedAt: Date;
            avaliacaoId: number;
        }[];
    } & {
        disciplinaId: number;
        professorId: number;
        conteudo: string;
        id: number;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: number, data: UpdateAvaliacaoDto, current_id: number): Promise<{
        disciplinaId: number;
        professorId: number;
        conteudo: string;
        id: number;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: number, current_id: number): Promise<{
        disciplinaId: number;
        professorId: number;
        conteudo: string;
        id: number;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
