import { Module } from '@nestjs/common';
import { AvaliacaoService } from './avaliacao.service';

@Module({
  providers: [AvaliacaoService]
})
export class AvaliacaoModule {}
