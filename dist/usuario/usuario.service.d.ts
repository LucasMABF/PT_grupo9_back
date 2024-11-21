import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateDto } from './dto/creat-user.dto';
export declare class UsuarioService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateUsuarioDto): Promise<void>;
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
    deleteUser(id: number): Promise<{
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
    update(id: number, data: UpdateDto): Promise<{
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
