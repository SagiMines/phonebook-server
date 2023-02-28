import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { ContactDto } from './dto/contact-dto';
import { Contact } from './entities/contact.entity';

@Injectable()
export class ContactsService {
  userRepository: any;
  constructor(
    @InjectRepository(Contact) private contactsRepo: Repository<Contact>,
  ) {}

  async findAll(): Promise<Contact[]> {
    return this.contactsRepo.find();
  }

  async findOne(id: number): Promise<Contact> {
    return this.contactsRepo.findOne({ where: { id } });
  }

  async findFiveDesc(offset: number): Promise<Contact[]> {
    return this.contactsRepo.find({
      skip: offset,
      take: 5,
      order: {
        firstName: 'DESC',
      },
    });
  }

  async create(contact: ContactDto): Promise<Contact> {
    return this.contactsRepo.save(contact);
  }

  async updateContact(contact: ContactDto, id: number): Promise<Contact> {
    const isContactExists = await this.findOne(id);
    if (isContactExists) {
      await this.contactsRepo.update({ id }, { ...contact });
    }
    return isContactExists;
  }

  async removeContact(id: number): Promise<Contact> {
    const contact = await this.findOne(id);
    await this.contactsRepo.remove(contact);
    return {
      id,
      firstName: '',
      lastName: '',
      nickName: '',
      address: '',
      phoneNumbers: [],
      photo: '',
    };
  }
}
