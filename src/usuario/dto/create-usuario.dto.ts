import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator"
import { ApiProper } from "@nestjs/core";
export class CreateUsuarioDto{
    
    @IsString()
    @IsNotEmpty()
    nome: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNumber()
    @IsNotEmpty()
    idade: number;

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