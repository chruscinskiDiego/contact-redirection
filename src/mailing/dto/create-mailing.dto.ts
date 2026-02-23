import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateMailingDto {

    @IsNotEmpty({message: 'O campo "nome" é obrigatório.'})
    @IsString()
    @MinLength(1, { message: 'O campo "nome" deve conter pelo menos 1 caractere.' })
    @MaxLength(255, { message: 'O campo "nome" deve conter no máximo 255 caracteres.' })
    name: string;

    @IsNotEmpty({message: 'O campo "email" é obrigatório.'})
    @IsEmail({}, { message: 'O campo "email" deve ser um endereço de email válido.' })
    @IsString()
    @MinLength(5, { message: 'O campo "email" deve conter pelo menos 5 caracteres.' })
    @MaxLength(255, { message: 'O campo "email" deve conter no máximo 255 caracteres.' })
    email: string;

    @IsNotEmpty({message: 'O campo "telefone" é obrigatório.'})
    @IsString()
    @MinLength(10, { message: 'O campo "telefone" deve conter pelo menos 10 caracteres.' })
    @MaxLength(20, { message: 'O campo "telefone" deve conter no máximo 20 caracteres.' })
    phone:string;

    @IsNotEmpty({message: 'O campo mensagem é obrigatório.'})
    @IsString()
    @MinLength(10, { message: 'O campo "mensagem" deve conter pelo menos 10 caracteres.' })
    @MaxLength(1000, { message: 'O campo "mensagem" deve conter no máximo 1000 caracteres.' })
    message: string;

}
