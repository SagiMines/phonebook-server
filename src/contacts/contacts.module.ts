import { Module } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contact } from './entities/contact.entity';
import { ContactsResolver } from './contacts.resolver';
@Module({
  imports: [TypeOrmModule.forFeature([Contact])],
  providers: [ContactsService, ContactsResolver],
})
export class ContactsModule {}
