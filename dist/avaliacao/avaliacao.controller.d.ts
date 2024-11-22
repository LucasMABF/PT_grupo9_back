import { AvaliacaoService } from './avaliacao.service';
import { CreateAvaliacaoDto } from './dto/create-avaliacao.dto';
import { UpdateAvaliacaoDto } from './dto/update-avaliacao.dto';
export declare class AvaliacaoController {
    private readonly avaliacaoService;
    constructor(avaliacaoService: AvaliacaoService);
    create(data: CreateAvaliacaoDto): Promise<{
        id: number;
        userId: number;
        disciplinaId: number;
        conteudo: string;
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
            id: number;
            userId: number;
            conteudo: string;
            createdAt: Date;
            updatedAt: Date;
            avaliacaoId: number;
        }[];
    } & {
        id: number;
        userId: number;
        disciplinaId: number;
        conteudo: string;
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
            id: number;
            userId: number;
            conteudo: string;
            createdAt: Date;
            updatedAt: Date;
            avaliacaoId: number;
        }[];
    } & {
        id: number;
        userId: number;
        disciplinaId: number;
        conteudo: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: number, data: UpdateAvaliacaoDto): Promise<{
        id: number;
        userId: number;
        disciplinaId: number;
        conteudo: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: number): Promise<{
        id: number;
        userId: number;
        disciplinaId: number;
        conteudo: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
