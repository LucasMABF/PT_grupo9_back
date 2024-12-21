import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
export declare class UsuarioService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateUsuarioDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        comentarios: {
            id: number;
            userId: number;
            conteudo: string;
            createdAt: Date;
            updatedAt: Date;
            avaliacaoId: number;
        }[];
        email: string;
        nome: string;
        departamento: string;
        curso: string;
        foto_perfil: Buffer;
        avaliacoes: {
            id: number;
            userId: number;
            professorId: number;
            disciplinaId: number;
            conteudo: string;
            createdAt: Date;
            updatedAt: Date;
        }[];
    }>;
    findByEmail(email: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        nome: string;
        senha: string;
        departamento: string;
        curso: string;
        foto_perfil: Buffer | null;
    }>;
    findAll(): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        comentarios: {
            id: number;
            userId: number;
            conteudo: string;
            createdAt: Date;
            updatedAt: Date;
            avaliacaoId: number;
        }[];
        email: string;
        nome: string;
        departamento: string;
        curso: string;
        foto_perfil: Buffer;
        avaliacoes: {
            id: number;
            userId: number;
            professorId: number;
            disciplinaId: number;
            conteudo: string;
            createdAt: Date;
            updatedAt: Date;
        }[];
    }[]>;
    findUser(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        comentarios: {
            id: number;
            userId: number;
            conteudo: string;
            createdAt: Date;
            updatedAt: Date;
            avaliacaoId: number;
        }[];
        email: string;
        nome: string;
        departamento: string;
        curso: string;
        foto_perfil: Buffer;
        avaliacoes: {
            id: number;
            userId: number;
            professorId: number;
            disciplinaId: number;
            conteudo: string;
            createdAt: Date;
            updatedAt: Date;
        }[];
    }>;
    remove(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        nome: string;
        senha: string;
        departamento: string;
        curso: string;
        foto_perfil: Buffer | null;
    }>;
    update(id: number, data: UpdateUsuarioDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        comentarios: {
            id: number;
            userId: number;
            conteudo: string;
            createdAt: Date;
            updatedAt: Date;
            avaliacaoId: number;
        }[];
        email: string;
        nome: string;
        departamento: string;
        curso: string;
        foto_perfil: Buffer;
        avaliacoes: {
            id: number;
            userId: number;
            professorId: number;
            disciplinaId: number;
            conteudo: string;
            createdAt: Date;
            updatedAt: Date;
        }[];
    }>;
}
