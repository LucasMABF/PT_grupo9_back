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
exports.UsuarioController = void 0;
const common_1 = require("@nestjs/common");
const usuario_service_1 = require("./usuario.service");
const create_usuario_dto_1 = require("./dto/create-usuario.dto");
const update_usuario_dto_1 = require("./dto/update-usuario.dto");
const currentUser_1 = require("../auth/decorators/currentUser");
const Public_1 = require("../auth/decorators/Public");
let UsuarioController = class UsuarioController {
    constructor(usuarioService) {
        this.usuarioService = usuarioService;
    }
    async findUser(current_id) {
        return await this.usuarioService.findUser(current_id);
    }
    async create(userData) {
        return await this.usuarioService.create(userData);
    }
    async deleteUser(current_id) {
        return await this.usuarioService.remove(current_id);
    }
    async update(data, current_id) {
        return await this.usuarioService.update(current_id, data);
    }
};
exports.UsuarioController = UsuarioController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, currentUser_1.CurrentUser)('sub')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "findUser", null);
__decorate([
    (0, Public_1.Public)(),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe({ whitelist: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_usuario_dto_1.CreateUsuarioDto]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, currentUser_1.CurrentUser)('sub')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "deleteUser", null);
__decorate([
    (0, common_1.Patch)(),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe({ whitelist: true }))),
    __param(1, (0, currentUser_1.CurrentUser)('sub')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_usuario_dto_1.UpdateUsuarioDto, Number]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "update", null);
exports.UsuarioController = UsuarioController = __decorate([
    (0, common_1.Controller)('usuario'),
    __metadata("design:paramtypes", [usuario_service_1.UsuarioService])
], UsuarioController);
//# sourceMappingURL=usuario.controller.js.map