import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ContactsService } from './contacts.service';
import { ContactDto } from './dto/contact-dto';
import { Contact } from './entities/contact.entity';

@Resolver(() => Contact)
export class ContactsResolver {
  constructor(private contactsService: ContactsService) {}

  @Query(() => [Contact], { name: 'getAllContacts' })
  findAll() {
    return this.contactsService.findAll();
  }

  @Mutation(() => Contact, { name: 'createContact' })
  create(@Args('contact') contact: ContactDto) {
    return this.contactsService.create(contact);
  }
}
