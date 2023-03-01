import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ContactsService } from './contacts.service';
import { ContactDto } from './dto/contact-dto';
import { Contact } from './entities/contact.entity';

@Resolver(() => Contact)
export class ContactsResolver {
  constructor(private contactsService: ContactsService) {}

  @Query(() => [Contact], { name: 'getFiveDesc' })
  findFiveDesc(@Args('offset') offset: number) {
    return this.contactsService.findFiveDesc(offset);
  }

  @Query(() => [Contact], { name: 'getAll' })
  findAll() {
    return this.contactsService.findAll();
  }

  @Query(() => Contact, { name: 'getOne' })
  findOne(@Args('id') id: number) {
    return this.contactsService.findOne(id);
  }

  @Query(() => [Contact], { name: 'getSearchValues' })
  findSearchValues(@Args('firstName') firstName: string) {
    return this.contactsService.findSearchValues(firstName);
  }

  @Mutation(() => Contact, { name: 'createContact' })
  create(@Args('contact') contact: ContactDto) {
    return this.contactsService.create(contact);
  }

  @Mutation(() => Contact, { name: 'updateContact' })
  updateContact(@Args('contact') contact: ContactDto, @Args('id') id: number) {
    return this.contactsService.updateContact(contact, id);
  }

  @Mutation(() => Contact, { name: 'removeContact' })
  removeContact(@Args('id') id: number) {
    return this.contactsService.removeContact(id);
  }
}
