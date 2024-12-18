import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
export declare class UsuarioController {
    private readonly usuarioService;
    constructor(usuarioService: UsuarioService);
    create(userData: CreateUsuarioDto): Promise<{
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
    deleteUser(id: number): Promise<{
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
