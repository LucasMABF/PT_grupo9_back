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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfessorController = void 0;
const common_1 = require("@nestjs/common");
const professor_service_1 = require("./professor.service");
const Public_1 = require("../auth/decorators/Public");
let ProfessorController = class ProfessorController {
    constructor(professorService) {
        this.professorService = professorService;
    }
    async findAll() {
        return await this.professorService.findAll();
    }
    async findAllSort(order_field, order) {
        return await this.professorService.findAll(order_field, order);
    }
    async findSort(order_field, order, limit) {
        return await this.professorService.findAll(order_field, order, limit);
    }
    async findUser(id) {
        return await this.professorService.findProfessor(id);
    }
};
exports.ProfessorController = ProfessorController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProfessorController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':order_field/:order'),
    __param(0, (0, common_1.Param)('order_field')),
    __param(1, (0, common_1.Param)('order')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ProfessorController.prototype, "findAllSort", null);
__decorate([
    (0, common_1.Get)(':order_field/:order/:limit'),
    __param(0, (0, common_1.Param)('order_field')),
    __param(1, (0, common_1.Param)('order')),
    __param(2, (0, common_1.Param)('limit', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number]),
    __metadata("design:returntype", Promise)
], ProfessorController.prototype, "findSort", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProfessorController.prototype, "findUser", null);
exports.ProfessorController = ProfessorController = __decorate([
    (0, Public_1.Public)(),
    (0, common_1.Controller)('professor'),
    __metadata("design:paramtypes", [professor_service_1.ProfessorService])
], ProfessorController);
//# sourceMappingURL=professor.controller.js.map