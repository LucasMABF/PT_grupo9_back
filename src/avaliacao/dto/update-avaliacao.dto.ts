import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class UpdateAvaliacaoDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  conteudo?: string;
}
