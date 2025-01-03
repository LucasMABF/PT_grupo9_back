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
exports.AvaliacaoService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let AvaliacaoService = class AvaliacaoService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data, current_id) {
        return await this.prisma.avaliacao.create({
            data: {
                conteudo: data.conteudo,
                comentarios: data.comentarios
                    ? {
                        create: data.comentarios.map((comentario) => ({
                            conteudo: comentario.texto,
                            user: { connect: { id: comentario.autorId } },
                        })),
                    }
                    : undefined,
                user: {
                    connect: { id: current_id },
                },
                disciplina: {
                    connect: { id: data.disciplinaId },
                },
                professor: {
                    connect: { id: data.professorId },
                },
            },
        });
    }
    async findAll(order_field, order, limit) {
        return await this.prisma.avaliacao.findMany({
            orderBy: [{ [order_field]: order }],
            take: limit,
            include: {
                user: {
                    select: {
                        nome: true,
                        departamento: true,
                        curso: true,
                        foto_perfil: true,
                    },
                },
                professor: true,
                disciplina: true,
                comentarios: true,
            },
        });
    }
    async findOne(id) {
        return await this.prisma.avaliacao.findUnique({
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
                professor: true,
                disciplina: true,
                comentarios: true,
            },
        });
    }
    async update(id, data, current_id) {
        const avaliacao = await this.prisma.avaliacao.findUnique({
            where: { id },
        });
        if (!avaliacao) {
            throw new common_1.NotFoundException(`Avaliação with ID ${id} not found.`);
        }
        if (avaliacao.userId !== current_id) {
            throw new common_1.UnauthorizedException();
        }
        return await this.prisma.avaliacao.update({
            where: { id },
            data: {
                conteudo: data.conteudo,
            },
        });
    }
    async remove(id, current_id) {
        const avaliacao = await this.prisma.avaliacao.findUnique({
            where: { id },
        });
        if (!avaliacao) {
            throw new common_1.NotFoundException(`Avaliação with ID ${id} not found.`);
        }
        if (avaliacao.userId !== current_id) {
            throw new common_1.UnauthorizedException();
        }
        return await this.prisma.avaliacao.delete({
            where: { id },
        });
    }
};
exports.AvaliacaoService = AvaliacaoService;
exports.AvaliacaoService = AvaliacaoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AvaliacaoService);
//# sourceMappingURL=avaliacao.service.js.map