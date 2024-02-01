import { hashSync } from "bcryptjs"
import { Transform } from "class-transformer"
import { IsString, IsNotEmpty, MinLength, IsEmail, IsMobilePhone} from "class-validator"

export class CreateUserDto {

    @IsString()
    @IsNotEmpty()
    name!: string

    @IsString()
    @IsEmail()
    email!: string

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    @Transform(({value}: {value: string}) => hashSync(value),{
        groups: ["transform"],
    })
    password!: string

    @IsString()
    @IsMobilePhone()
    telephone!: string

}
