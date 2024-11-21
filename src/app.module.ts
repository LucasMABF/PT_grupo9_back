import { Module } from '@nestjs/common';
import { AvaliacaoModule } from './avaliacao/avaliacao.module';
import { PrismaModule } from './prisma/prisma.module';
import { CommentModule } from './comment/comment.module';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [AvaliacaoModule, CommentModule, PrismaModule, UsuarioModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
