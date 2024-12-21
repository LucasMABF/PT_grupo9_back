import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
export declare class UsuarioService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateUsuarioDto): Promise<{
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
    findByEmail(email: string): Promise<{
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
    findAll(): Promise<{
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
    }[]>;
    findUser(id: number): Promise<{
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
        avaliacoes: ({
            user: {
                id: number;
                nome: string;
                departamento: string;
                curso: string;
                foto_perfil: Buffer;
            };
            professor: {
                id: number;
                nome: string;
                departamento: string;
                createdAt: Date;
                updatedAt: Date;
            };
            disciplina: {
                id: number;
                nome: string;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            userId: number;
            conteudo: string;
            professorId: number;
            disciplinaId: number;
        })[];
    }>;
    remove(id: number): Promise<{
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
    update(id: number, data: UpdateUsuarioDto): Promise<{
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
