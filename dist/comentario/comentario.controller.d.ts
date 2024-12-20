import { ComentarioService } from './comentario.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
export declare class ComentarioController {
    private readonly comentarioService;
    constructor(comentarioService: ComentarioService);
    create(data: CreateCommentDto, current_id: number): Promise<{
        id: number;
        userId: number;
        avaliacaoId: number;
        conteudo: string;
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
        avaliacao: {
            id: number;
            userId: number;
            conteudo: string;
            createdAt: Date;
            updatedAt: Date;
            professorId: number;
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
    findAllByAvaliacao(id_avaliacao: number): Promise<({
        user: {
            nome: string;
            departamento: string;
            curso: string;
            foto_perfil: Buffer;
        };
        avaliacao: {
            id: number;
            userId: number;
            conteudo: string;
            createdAt: Date;
            updatedAt: Date;
            professorId: number;
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
            nome: string;
            departamento: string;
            curso: string;
            foto_perfil: Buffer;
        };
        avaliacao: {
            id: number;
            userId: number;
            conteudo: string;
            createdAt: Date;
            updatedAt: Date;
            professorId: number;
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
    update(id: number, data: UpdateCommentDto, current_id: number): Promise<{
        id: number;
        userId: number;
        avaliacaoId: number;
        conteudo: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: number, current_id: number): Promise<{
        id: number;
        userId: number;
        avaliacaoId: number;
        conteudo: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
