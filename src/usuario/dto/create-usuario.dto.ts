import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
export class CreateUsuarioDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  senha: string;

  @IsString()
  @IsNotEmpty()
  departamento: string;

  @IsString()
  @IsNotEmpty()
  curso: string;
}
