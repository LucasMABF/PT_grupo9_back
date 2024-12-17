import { Module } from '@nestjs/common';
import { AvaliacaoModule } from './avaliacao/avaliacao.module';
import { ComentarioModule } from './comentario/comentario.module';
import { PrismaModule } from './prisma/prisma.module';
import { UsuarioModule } from './usuario/usuario.module';
import { ProfessorModule } from './professor/professor.module';

@Module({
  imports: [AvaliacaoModule, PrismaModule, UsuarioModule, ComentarioModule, ProfessorModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
