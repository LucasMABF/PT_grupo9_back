import { AvaliacaoService } from './avaliacao.service';
import { CreateAvaliacaoDto } from './dto/create-avaliacao.dto';
import { UpdateAvaliacaoDto } from './dto/update-avaliacao.dto';
export declare class AvaliacaoController {
    private readonly avaliacaoService;
    constructor(avaliacaoService: AvaliacaoService);
    create(createAvaliacaoDto: CreateAvaliacaoDto): Promise<{
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
    findOne(id: string): Promise<{
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
    update(id: string, updateAvaliacaoDto: UpdateAvaliacaoDto): Promise<{
        userId: number;
        disciplinaId: number;
        conteudo: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        userId: number;
        disciplinaId: number;
        conteudo: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
