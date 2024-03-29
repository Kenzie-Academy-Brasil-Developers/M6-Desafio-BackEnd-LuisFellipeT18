import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dtos/login.dto';
import { compare } from 'bcryptjs';

@Injectable()
export class AuthService {
    constructor(
        private userService: UsersService,
        private jwtService: JwtService,
    ){}

    async login({email, password}: LoginDto){
        const user = await this.userService.findUserByEmail(email)
        if(!user){
            throw new UnauthorizedException("Invalid email or password")
        }

        const passwordMatch = await compare(password, user.password)
        if(!passwordMatch){
            throw new UnauthorizedException("Invalid email or password")
        }

        return {
            token: this.jwtService.sign({email},{subject: user.id}),
            user: {name:user.name, email:user.email, id:user.id}
        }

    }
}
