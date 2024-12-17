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
    async create(data) {
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
                    connect: { id: data.userId },
                },
                disciplina: {
                    connect: { id: data.disciplinaId },
                },
            },
        });
    }
    async findAll() {
        return await this.prisma.avaliacao.findMany({
            include: {
                user: true,
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
                user: true,
                professor: true,
                disciplina: true,
                comentarios: true,
            },
        });
    }
    async update(id, data) {
        return await this.prisma.avaliacao.update({
            where: { id },
            data: {
                conteudo: data.conteudo,
                user: data.userId ? { connect: { id: data.userId } } : undefined,
                disciplina: data.disciplinaId
                    ? { connect: { id: data.disciplinaId } }
                    : undefined,
                comentarios: data.comentarios
                    ? {
                        create: data.comentarios.map((comentario) => ({
                            conteudo: comentario.texto,
                            user: { connect: { id: comentario.autorId } },
                        })),
                    }
                    : undefined,
            },
        });
    }
    async remove(id) {
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