import {
  IsNotEmpty,
  IsInt,
  IsString,
  IsArray,
  IsOptional,
} from 'class-validator';

export class UpdateAvaliacaoDto {
  @IsInt()
  @IsNotEmpty()
  @IsOptional()
  userId?: number;

  @IsInt()
  @IsNotEmpty()
  @IsOptional()
  disciplinaId?: number;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  conteudo?: string;

  @IsArray()
  @IsOptional()
  comentarios?: { texto: string; autorId: number }[];
}
