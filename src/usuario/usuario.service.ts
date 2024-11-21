import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { UpdateDto } from './dto/creat-user.dto';

@Injectable()
export class UsuarioService {
    constructor(
        private readonly prisma: PrismaService
    ){}

    async create(data:CreateUsuarioDto ){
        const usuario = await this.prisma.user.create({
            data: data,
        })
    }

    async findAll() {
        return await this.prisma.user.findMany();
    }

    async findUser(id: number){
        return await this.prisma.user.findUnique({
            where:{
                id: id,
            },
        });

    }
    async deleteUser(id: number){
        return await this.prisma.user.delete({
            where:{
                id: id,
            },
        });
    }
    async update(id : number, data: UpdateDto ){
        return await this.prisma.user.update({
            where:{
                id: id,
            },
            data: data,
        });
    }
}
