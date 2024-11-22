import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class UpdateCommentDto {
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  conteudo: string;
}
