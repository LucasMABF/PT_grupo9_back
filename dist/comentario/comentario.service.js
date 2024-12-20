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
exports.ComentarioService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ComentarioService = class ComentarioService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data, current_id) {
        if (current_id !== data.userId) {
            throw new common_1.UnauthorizedException();
        }
        return await this.prisma.comentario.create({
            data,
        });
    }
    async findAll() {
        return await this.prisma.comentario.findMany({
            include: {
                user: {
                    select: {
                        nome: true,
                        departamento: true,
                        curso: true,
                        foto_perfil: true,
                    },
                },
                avaliacao: true,
            },
        });
    }
    async findAllByAvaliacao(id_avaliacao) {
        return await this.prisma.comentario.findMany({
            where: {
                avaliacaoId: id_avaliacao,
            },
            orderBy: [{ createdAt: 'asc' }],
            include: {
                user: {
                    select: {
                        nome: true,
                        departamento: true,
                        curso: true,
                        foto_perfil: true,
                    },
                },
                avaliacao: true,
            },
        });
    }
    async findOne(id) {
        return await this.prisma.comentario.findUnique({
            where: { id },
            include: {
                user: {
                    select: {
                        nome: true,
                        departamento: true,
                        curso: true,
                        foto_perfil: true,
                    },
                },
                avaliacao: true,
            },
        });
    }
    async update(id, data, current_id) {
        const comentario = await this.prisma.comentario.findUnique({
            where: { id },
        });
        if (!comentario) {
            throw new common_1.NotFoundException(`Avaliação with ID ${id} not found.`);
        }
        if (comentario.userId !== current_id) {
            throw new common_1.UnauthorizedException();
        }
        return await this.prisma.comentario.update({
            where: { id },
            data,
        });
    }
    async remove(id, current_id) {
        const comentario = await this.prisma.comentario.findUnique({
            where: { id },
        });
        if (!comentario) {
            throw new common_1.NotFoundException(`Avaliação with ID ${id} not found.`);
        }
        if (comentario.userId !== current_id) {
            throw new common_1.UnauthorizedException();
        }
        return await this.prisma.comentario.delete({
            where: { id },
        });
    }
};
exports.ComentarioService = ComentarioService;
exports.ComentarioService = ComentarioService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ComentarioService);
//# sourceMappingURL=comentario.service.js.map