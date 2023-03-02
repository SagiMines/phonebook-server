import { Field, ObjectType } from '@nestjs/graphql';
import { PhotoFilter } from 'src/photo-filter/entities/photo-filter.entity';
import { OneToOne } from 'typeorm';
import { Column } from 'typeorm/decorator/columns/Column';
import { PrimaryGeneratedColumn } from 'typeorm/decorator/columns/PrimaryGeneratedColumn';
import { Entity } from 'typeorm/decorator/entity/Entity';

@ObjectType()
@Entity()
export class Contact {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field({ nullable: false })
  @Column({ name: 'first_name', nullable: false, type: 'varchar', length: 50 })
  firstName: string;

  @Field({ nullable: false })
  @Column({ name: 'last_name', nullable: false, type: 'varchar', length: 50 })
  lastName: string;

  @Field({ nullable: true })
  @Column({ name: 'nick_name', nullable: true, type: 'varchar', length: 50 })
  nickName: string;

  @Field((type) => [String], { nullable: false })
  @Column('text', { array: true, name: 'phone_numbers', nullable: false })
  phoneNumbers: string[];

  @Field({ nullable: false })
  @Column({ nullable: false, type: 'varchar', length: 100 })
  address: string;

  @Field({ nullable: false })
  @Column({ nullable: false, type: 'varchar', length: 1000 })
  photo: string;

  @OneToOne(() => PhotoFilter, (photoFilter) => photoFilter.contact)
  @Field(() => PhotoFilter)
  photoFilter: PhotoFilter;
}
