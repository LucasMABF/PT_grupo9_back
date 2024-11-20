import { Module } from '@nestjs/common';
import { AvaliacaoModule } from './avaliacao/avaliacao.module';
import { PrismaModule } from './prisma/prisma.module';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [AvaliacaoModule, CommentModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
