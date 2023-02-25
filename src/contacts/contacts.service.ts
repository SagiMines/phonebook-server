import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContactDto } from './dto/contact-dto';
import { Contact } from './entities/contact.entity';

@Injectable()
export class ContactsService {
  constructor(
    @InjectRepository(Contact) private contactsRepo: Repository<Contact>,
  ) {}

  async findAll(): Promise<Contact[]> {
    return this.contactsRepo.find();
  }

  async create(contact: ContactDto): Promise<Contact> {
    return this.contactsRepo.save(contact);
  }
}
