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
exports.ProfessorService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ProfessorService = class ProfessorService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(order_field, order, limit) {
        return await this.prisma.professor.findMany({
            orderBy: [{ [order_field]: order }],
            take: limit,
            include: {
                avaliacoes: {
                    include: {
                        user: {
                            select: {
                                id: true,
                                nome: true,
                                departamento: true,
                                curso: true,
                                foto_perfil: true,
                            }
                        },
                        professor: true,
                        disciplina: true,
                    }
                },
                disciplinas: true,
            }
        });
    }
    async findProfessor(id) {
        return await this.prisma.professor.findUnique({
            where: {
                id: id,
            },
            include: {
                avaliacoes: {
                    include: {
                        user: {
                            select: {
                                id: true,
                                nome: true,
                                departamento: true,
                                curso: true,
                                foto_perfil: true,
                            }
                        },
                        professor: {
                            select: {
                                nome: true,
                            }
                        },
                        disciplina: true,
                    }
                },
                disciplinas: true,
            }
        });
    }
};
exports.ProfessorService = ProfessorService;
exports.ProfessorService = ProfessorService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProfessorService);
//# sourceMappingURL=professor.service.js.map