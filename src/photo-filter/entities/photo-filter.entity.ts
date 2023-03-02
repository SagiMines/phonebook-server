import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Contact } from 'src/contacts/entities/contact.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class PhotoFilter {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field({ nullable: false })
  @Column({ nullable: false, type: 'varchar', length: 10 })
  type: string;

  @Field(() => Int, { nullable: false })
  @Column({ nullable: false, type: 'int' })
  amount: number;

  @OneToOne(() => Contact, (contact) => contact.photoFilter)
  @Field(() => Contact)
  contact: Contact;

  @Column({ name: 'contact_id', nullable: false, type: 'int' })
  @Field(() => Int, { nullable: false })
  contactId: number;
}
