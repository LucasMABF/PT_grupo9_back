import { Prisma } from '@prisma/client'
import { IsNotEmpty, IsInt, IsString, IsArray, IsOptional } from 'class-validator';

export class CreateCommentDto {
  @IsInt()
  @IsNotEmpty()
  userId: number;

  @IsInt()
  @IsNotEmpty()
  disciplinaId: number;

  @IsString()
  @IsNotEmpty()
  conteudo: string;

  @IsArray()
  @IsOptional()
  avaliacao?: {texto: string; autorId: number } [];
}
