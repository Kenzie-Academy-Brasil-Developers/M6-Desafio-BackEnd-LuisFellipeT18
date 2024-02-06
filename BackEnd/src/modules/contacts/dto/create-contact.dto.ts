import { ApiProperty } from "@nestjs/swagger"
import { IsString, IsNotEmpty, IsEmail, IsMobilePhone} from "class-validator"

export class CreateContactDto {
    
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name!: string

    @ApiProperty()
    @IsString()
    @IsEmail()
    email!: string

    @ApiProperty()
    @IsString()
    telephone!: string
}
