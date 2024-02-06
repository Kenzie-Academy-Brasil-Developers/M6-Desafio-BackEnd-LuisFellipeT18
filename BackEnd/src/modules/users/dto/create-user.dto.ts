import { ApiProperty } from "@nestjs/swagger"
import { hashSync } from "bcryptjs"
import { Transform } from "class-transformer"
import { IsString, IsNotEmpty, MinLength, IsEmail, IsMobilePhone} from "class-validator"

export class CreateUserDto {

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
    @IsNotEmpty()
    @MinLength(8)
    @Transform(({value}: {value: string}) => hashSync(value),{
        groups: ["transform"],
    })
    password!: string

    @ApiProperty()
    @IsString()
    @IsMobilePhone()
    telephone!: string

}
