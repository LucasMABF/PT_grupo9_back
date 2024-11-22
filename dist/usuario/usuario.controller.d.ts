import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
export declare class UsuarioController {
    private readonly usuarioService;
    constructor(usuarioService: UsuarioService);
    create(userData: CreateUsuarioDto): Promise<{
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
