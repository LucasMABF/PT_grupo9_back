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
exports.AvaliacaoController = void 0;
const common_1 = require("@nestjs/common");
const avaliacao_service_1 = require("./avaliacao.service");
const create_avaliacao_dto_1 = require("./dto/create-avaliacao.dto");
const update_avaliacao_dto_1 = require("./dto/update-avaliacao.dto");
let AvaliacaoController = class AvaliacaoController {
    constructor(avaliacaoService) {
        this.avaliacaoService = avaliacaoService;
    }
    async create(data) {
        return await this.avaliacaoService.create(data);
    }
    async findAll() {
        return await this.avaliacaoService.findAll();
    }
    async findAllSort(order_field, order) {
        return await this.avaliacaoService.findAll(order_field, order);
    }
    async findSort(order_field, order, limit) {
        return await this.avaliacaoService.findAll(order_field, order, limit);
    }
    async findOne(id) {
        return await this.avaliacaoService.findOne(id);
    }
    async update(id, data) {
        return await this.avaliacaoService.update(id, data);
    }
    async remove(id) {
        return await this.avaliacaoService.remove(id);
    }
};
exports.AvaliacaoController = AvaliacaoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe({ whitelist: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_avaliacao_dto_1.CreateAvaliacaoDto]),
    __metadata("design:returntype", Promise)
], AvaliacaoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AvaliacaoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':order_field/:order'),
    __param(0, (0, common_1.Param)("order_field")),
    __param(1, (0, common_1.Param)("order")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AvaliacaoController.prototype, "findAllSort", null);
__decorate([
    (0, common_1.Get)(':order_field/:order/:limit'),
    __param(0, (0, common_1.Param)("order_field")),
    __param(1, (0, common_1.Param)("order")),
    __param(2, (0, common_1.Param)("limit", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number]),
    __metadata("design:returntype", Promise)
], AvaliacaoController.prototype, "findSort", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AvaliacaoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)(new common_1.ValidationPipe({ whitelist: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_avaliacao_dto_1.UpdateAvaliacaoDto]),
    __metadata("design:returntype", Promise)
], AvaliacaoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AvaliacaoController.prototype, "remove", null);
exports.AvaliacaoController = AvaliacaoController = __decorate([
    (0, common_1.Controller)('avaliacao'),
    __metadata("design:paramtypes", [avaliacao_service_1.AvaliacaoService])
], AvaliacaoController);
//# sourceMappingURL=avaliacao.controller.js.map