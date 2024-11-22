import { Module } from '@nestjs/common';
import { AvaliacaoModule } from './avaliacao/avaliacao.module';
import { ComentarioModule } from './comentario/comentario.module';
import { PrismaModule } from './prisma/prisma.module';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [AvaliacaoModule, PrismaModule, UsuarioModule, ComentarioModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
