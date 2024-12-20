import { IsEmail, IsString, IsNotEmpty, IsOptional } from 'class-validator';
export class UpdateUsuarioDto {
  @IsString()
  @IsOptional()
  nome?: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  departamento?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  curso?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  senha?: string;
}
