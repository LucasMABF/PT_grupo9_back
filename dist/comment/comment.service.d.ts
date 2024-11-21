import { UpdateCommentDto } from './dto/update-comment.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
export declare class CommentService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.ComentarioCreateInput): Promise<{
        userId: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        avaliacaoId: number;
    }>;
    findAll(): Promise<string>;
    findOne(id: number): Promise<string>;
    update(id: number, updateCommentDto: UpdateCommentDto): Promise<string>;
    remove(id: number): Promise<string>;
}
