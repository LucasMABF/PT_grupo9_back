import { IsEmail, IsString } from "class-validator"
export class UpdateDto{
    @IsString()
    nome: string;
    @IsEmail()
    email: string;
    @IsString()
    departamento: string;
    @IsString()
    curso: string;
    
}
