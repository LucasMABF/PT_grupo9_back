import { ComentarioService } from './comentario.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
export declare class ComentarioController {
    private readonly comentarioService;
    constructor(comentarioService: ComentarioService);
    create(data: CreateCommentDto): Promise<{
        id: number;
        userId: number;
        avaliacaoId: number;
        conteudo: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<({
        user: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nome: string;
            email: string;
            senha: string;
            departamento: string;
            curso: string;
            foto_perfil: Buffer | null;
        };
        avaliacao: {
            id: number;
            userId: number;
            conteudo: string;
            createdAt: Date;
            updatedAt: Date;
            disciplinaId: number;
        };
    } & {
        id: number;
        userId: number;
        avaliacaoId: number;
        conteudo: string;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findOne(id: number): Promise<{
        user: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nome: string;
            email: string;
            senha: string;
            departamento: string;
            curso: string;
            foto_perfil: Buffer | null;
        };
        avaliacao: {
            id: number;
            userId: number;
            conteudo: string;
            createdAt: Date;
            updatedAt: Date;
            disciplinaId: number;
        };
    } & {
        id: number;
        userId: number;
        avaliacaoId: number;
        conteudo: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: number, data: UpdateCommentDto): Promise<{
        id: number;
        userId: number;
        avaliacaoId: number;
        conteudo: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: number): Promise<{
        id: number;
        userId: number;
        avaliacaoId: number;
        conteudo: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
