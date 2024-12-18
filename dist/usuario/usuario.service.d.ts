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
        email: string;
        nome: string;
        senha: string;
        departamento: string;
        curso: string;
        foto_perfil: Buffer | null;
    }[]>;
    findUser(id: number): Promise<{
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
        email: string;
        nome: string;
        senha: string;
        departamento: string;
        curso: string;
        foto_perfil: Buffer | null;
    }>;
}
