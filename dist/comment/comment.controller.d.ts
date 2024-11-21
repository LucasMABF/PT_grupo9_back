import { CommentService } from './comment.service';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Prisma } from '@prisma/client';
export declare class CommentController {
    private readonly commentService;
    constructor(commentService: CommentService);
    create(createCommentDto: Prisma.ComentarioCreateInput): Promise<{
        userId: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        avaliacaoId: number;
    }>;
    findAll(): Promise<string>;
    findOne(id: string): Promise<string>;
    update(id: string, updateCommentDto: UpdateCommentDto): Promise<string>;
    remove(id: string): Promise<string>;
}
