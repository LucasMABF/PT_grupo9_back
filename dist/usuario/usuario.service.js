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
exports.UsuarioService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt = require("bcrypt");
let UsuarioService = class UsuarioService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        const existingUser = await this.findByEmail(data.email);
        if (existingUser) {
            throw new common_1.ConflictException('Este e-mail já está sendo usado.');
        }
        const hashedPassword = await bcrypt.hash(data.senha, 10);
        return await this.prisma.user.create({
            data: {
                ...data,
                senha: hashedPassword,
            },
            select: {
                id: true,
                nome: true,
                email: true,
                departamento: true,
                curso: true,
                createdAt: true,
                foto_perfil: true,
                updatedAt: true,
                comentarios: true,
                avaliacoes: true,
            },
        });
    }
    async findByEmail(email) {
        if (!email) {
            return null;
        }
        const user = await this.prisma.user.findUnique({ where: { email } });
        if (!user) {
            return null;
        }
        return user;
    }
    async findAll() {
        return await this.prisma.user.findMany({
            select: {
                id: true,
                nome: true,
                email: true,
                departamento: true,
                curso: true,
                createdAt: true,
                foto_perfil: true,
                updatedAt: true,
                comentarios: true,
                avaliacoes: true,
            },
        });
    }
    async findUser(id) {
        const user = await this.prisma.user.findUnique({
            select: {
                id: true,
                nome: true,
                email: true,
                departamento: true,
                curso: true,
                createdAt: true,
                foto_perfil: true,
                updatedAt: true,
                comentarios: true,
                avaliacoes: true,
            },
            where: { id },
        });
        if (!user) {
            throw new common_1.NotFoundException(`User with ID ${id} not found.`);
        }
        return user;
    }
    async remove(id, current_id) {
        const user = await this.prisma.user.findUnique({
            where: { id },
        });
        if (!user) {
            throw new common_1.NotFoundException(`User with ID ${id} not found.`);
        }
        if (user.id !== current_id) {
            throw new common_1.UnauthorizedException();
        }
        return await this.prisma.user.delete({
            where: { id },
        });
    }
    async update(id, data, current_id) {
        const user = await this.prisma.user.findUnique({
            where: { id },
        });
        if (!user) {
            throw new common_1.NotFoundException(`User with ID ${id} not found.`);
        }
        if (user.id !== current_id) {
            throw new common_1.UnauthorizedException();
        }
        const hashedPassword = data.senha
            ? await bcrypt.hash(data.senha, 10)
            : undefined;
        return await this.prisma.user.update({
            where: { id },
            data: hashedPassword
                ? {
                    ...data,
                    senha: hashedPassword,
                }
                : data,
            select: {
                id: true,
                nome: true,
                email: true,
                departamento: true,
                curso: true,
                createdAt: true,
                foto_perfil: true,
                updatedAt: true,
                comentarios: true,
                avaliacoes: true,
            },
        });
    }
};
exports.UsuarioService = UsuarioService;
exports.UsuarioService = UsuarioService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsuarioService);
//# sourceMappingURL=usuario.service.js.map