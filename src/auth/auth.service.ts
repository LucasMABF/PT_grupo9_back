import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from 'src/usuario/usuario.service';
import * as bcrypt from 'bcrypt';
import { LoginRequestBody } from './dto/login-request-body';
import { UserPayload } from './dto/user-payload';
import { UserToken } from './dto/user-token';

@Injectable()
export class AuthService {
  constructor(
    private readonly usuarioService: UsuarioService,
    private readonly jwtservice: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async login(loginInfo: LoginRequestBody): Promise<UserToken> {
    const isUserValid = await this.validateUser(
      loginInfo.email,
      loginInfo.senha,
    );

    if (!isUserValid) {
      throw new UnauthorizedException('Usuário ou senha incorretos');
    }

    const payload: UserPayload = {
      sub: isUserValid.id,
      email: loginInfo.email,
    };

    const jwtSecret = this.configService.get<string>('JWT_SECRET');

    const jwtToken = await this.jwtservice.signAsync(payload, {
      expiresIn: '1d',
      secret: jwtSecret,
    });

    return {
      access_token: jwtToken,
    };
  }

  async validateUser(email: string, senha: string) {
    const user = await this.usuarioService.findByEmail(email);
    if (user) {
      const isPasswordValid = await bcrypt.compare(senha, user.senha);

      if (isPasswordValid) {
        return {
          ...user,
          senha: undefined,
        };
      }
    }

    return null;
  }
}
