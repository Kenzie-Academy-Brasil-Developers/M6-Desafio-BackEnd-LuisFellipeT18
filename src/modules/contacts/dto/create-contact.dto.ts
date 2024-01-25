import { hashSync } from "bcryptjs"
import { Transform } from "class-transformer"
import { IsString, IsNotEmpty, MinLength, IsEmail, IsMobilePhone} from "class-validator"

export class CreateContactDto {
    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsEmail()
    email: string

    @IsString()
    @IsMobilePhone()
    telephone: string

    @IsString() 
    userId: string
}
