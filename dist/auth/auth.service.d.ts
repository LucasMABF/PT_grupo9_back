import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from 'src/usuario/usuario.service';
import { LoginRequestBody } from './dto/login-request-body';
import { UserToken } from './dto/user-token';
export declare class AuthService {
    private readonly usuarioService;
    private readonly jwtservice;
    private readonly configService;
    constructor(usuarioService: UsuarioService, jwtservice: JwtService, configService: ConfigService);
    login(loginInfo: LoginRequestBody): Promise<UserToken>;
    validateUser(email: string, senha: string): Promise<{
        senha: any;
        id: number;
        nome: string;
        email: string;
        departamento: string;
        curso: string;
        foto_perfil: Buffer | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
