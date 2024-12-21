import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
export declare class UsuarioController {
    private readonly usuarioService;
    constructor(usuarioService: UsuarioService);
    findUser(current_id: number): Promise<{
        id: number;
        nome: string;
        email: string;
        departamento: string;
        curso: string;
        foto_perfil: Buffer;
        createdAt: Date;
        updatedAt: Date;
        comentarios: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            userId: number;
            avaliacaoId: number;
            conteudo: string;
        }[];
        avaliacoes: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            userId: number;
            conteudo: string;
            professorId: number;
            disciplinaId: number;
        }[];
    }>;
    create(userData: CreateUsuarioDto): Promise<{
        id: number;
        nome: string;
        email: string;
        departamento: string;
        curso: string;
        foto_perfil: Buffer;
        createdAt: Date;
        updatedAt: Date;
        comentarios: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            userId: number;
            avaliacaoId: number;
            conteudo: string;
        }[];
        avaliacoes: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            userId: number;
            conteudo: string;
            professorId: number;
            disciplinaId: number;
        }[];
    }>;
    deleteUser(current_id: number): Promise<{
        id: number;
        nome: string;
        email: string;
        senha: string;
        departamento: string;
        curso: string;
        foto_perfil: Buffer | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(data: UpdateUsuarioDto, current_id: number): Promise<{
        id: number;
        nome: string;
        email: string;
        departamento: string;
        curso: string;
        foto_perfil: Buffer;
        createdAt: Date;
        updatedAt: Date;
        comentarios: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            userId: number;
            avaliacaoId: number;
            conteudo: string;
        }[];
        avaliacoes: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            userId: number;
            conteudo: string;
            professorId: number;
            disciplinaId: number;
        }[];
    }>;
}
