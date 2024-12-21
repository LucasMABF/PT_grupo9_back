"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const usuario_service_1 = require("../usuario/usuario.service");
const bcrypt = require("bcrypt");
let AuthService = class AuthService {
    constructor(usuarioService, jwtservice, configService) {
        this.usuarioService = usuarioService;
        this.jwtservice = jwtservice;
        this.configService = configService;
    }
    async login(loginInfo) {
        const isUserValid = await this.validateUser(loginInfo.email, loginInfo.senha);
        if (!isUserValid) {
            throw new common_1.UnauthorizedException('Usuário ou senha incorretos');
        }
        const payload = {
            sub: isUserValid.id,
            email: loginInfo.email,
        };
        const jwtSecret = this.configService.get('JWT_SECRET');
        const jwtToken = await this.jwtservice.signAsync(payload, {
            expiresIn: '1d',
            secret: jwtSecret,
        });
        return {
            access_token: jwtToken,
            id: isUserValid.id,
        };
    }
    async validateUser(email, senha) {
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
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [usuario_service_1.UsuarioService,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
//# sourceMappingURL=auth.service.js.map