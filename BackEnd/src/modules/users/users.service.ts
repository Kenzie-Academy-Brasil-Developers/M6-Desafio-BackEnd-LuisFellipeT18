import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { plainToInstance } from 'class-transformer';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService){}
  async createUsers(createUserDto: CreateUserDto) {
    const finduser = await this.prisma.user.findFirst({
      where: {email: createUserDto.email}
    })
    if(finduser){
      throw new ConflictException("User already exists");
      
    }
    const currentDate = new Date()
    const user = new User()
    Object.assign(user, {
      ...createUserDto
    })
    await this.prisma.user.create({
      data: {...user, Registration_Date: currentDate.toISOString(),}
      
    })
    return plainToInstance(User, user)
  }

  async findAllUsers() {
    const users = await this.prisma.user.findMany()
    return plainToInstance(User, users)
  }

  async findOneUsers(id: string) {
    const user = await this.prisma.user.findUnique({where: {id}})
    return plainToInstance(User, user)
  }

  async findUserByEmail(email: string) {
    const user = await this.prisma.user.findFirst({where: {email}})
    return user
  }


  async updateUsers(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.prisma.user.findUnique({where: {id}})
    if(!user){
      throw new NotFoundException("User not found");
    }
    const updateUser = await this.prisma.user.update({where: {id}, data: {...updateUserDto}})
    return plainToInstance(User, updateUser)
  }

  async removeUsersAndContacts(userId: string): Promise<void> {
    const user = await this.prisma.user.findUnique({
      where: {id: userId},
      include: { contacts: true },
    })
    if(!user){
      throw new NotFoundException("User not found");
    }
    await this.prisma.$transaction([
      this.prisma.contact.deleteMany({
        where: { userId: user.id}
      }),
      this.prisma.user.delete({
        where:{id: userId}
      })
    ])
  }
}
