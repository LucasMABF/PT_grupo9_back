import {
  IsNotEmpty,
  IsInt,
  IsString,
  IsArray,
  IsOptional,
} from 'class-validator';

export class CreateAvaliacaoDto {
  @IsInt()
  @IsNotEmpty()
  userId: number;

  @IsInt()
  @IsNotEmpty()
  disciplinaId: number;

  @IsInt()
  @IsNotEmpty()
  professorId: number;

  @IsString()
  @IsNotEmpty()
  conteudo: string;

  @IsArray()
  @IsOptional()
  comentarios?: { texto: string; autorId: number }[];
}
