import { IsNotEmpty, IsInt, IsString } from 'class-validator';

export class CreateCommentDto {
  @IsInt()
  @IsNotEmpty()
  userId: number;

  @IsInt()
  @IsNotEmpty()
  avaliacaoId: number;

  @IsString()
  @IsNotEmpty()
  conteudo: string;
}
