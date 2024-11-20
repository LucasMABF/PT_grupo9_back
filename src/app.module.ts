import { Module } from '@nestjs/common';
import { AvaliacaoModule } from './avaliacao/avaliacao.module';

@Module({
  imports: [AvaliacaoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
