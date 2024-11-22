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
        senha: string;
        departamento: string;
        curso: string;
        foto_perfil: Buffer | null;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findUser(id: number): Promise<{
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
        senha: string;
        departamento: string;
        curso: string;
        foto_perfil: Buffer | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
