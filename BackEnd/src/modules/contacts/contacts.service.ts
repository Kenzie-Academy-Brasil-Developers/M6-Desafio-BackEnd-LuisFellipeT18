import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { Contact } from './entities/contact.entity';
import { plainToInstance } from 'class-transformer';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class ContactsService {
  constructor(private prisma: PrismaService){}
  async createContacts(createContactDto: CreateContactDto, userId: string) {
    const findcontact = await this.prisma.contact.findFirst({
      where: {email: createContactDto.email}
    })
    if(findcontact){
      throw new ConflictException("Contact already exists")
    }
  
    const contact = new Contact()
    Object.assign(contact, {
      ...createContactDto
    })
    const user = await this.prisma.user.findUnique({
      where: { id: userId }
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    await this.prisma.contact.create({
      data: {
        ...contact, userId
      },
    })
    return plainToInstance(Contact, contact)
  }

  async findAllContacts() {
    const contacts = await this.prisma.contact.findMany()
    return plainToInstance(Contact, contacts)
  }

  async findOneContacts(id: string) {
    const contact = await this.prisma.contact.findUnique({where: {id}})
    if(!contact){
      throw new NotFoundException("Contact not found")
    }
    return plainToInstance(Contact, contact)
  }

  async updateContacts(id: string, updateContactDto: UpdateContactDto) {
    const contact = await this.prisma.contact.findUnique({where: {id}})
    if(!contact){
      throw new NotFoundException("Contact not found")
    }
    const updatedContact = await this.prisma.contact.update({
      where: {id},
      data: {...updateContactDto}
    })
    return  plainToInstance(Contact, updatedContact)
  }

  async removeContacts(id: string) {
    const contact = await this.prisma.contact.findUnique({where: {id}})
    if(!contact){
      throw new NotFoundException("Contact not found")
    }
    await this.prisma.contact.delete({where: {id}})
  }
}
