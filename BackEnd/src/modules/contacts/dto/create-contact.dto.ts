import { IsString, IsNotEmpty, IsEmail, IsMobilePhone} from "class-validator"

export class CreateContactDto {
    @IsString()
    @IsNotEmpty()
    name!: string

    @IsString()
    @IsEmail()
    email!: string

    @IsString()
    @IsMobilePhone()
    telephone!: string
}
