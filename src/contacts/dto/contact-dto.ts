import { Field, InputType } from '@nestjs/graphql';
import { IsArray, IsNotEmpty, MaxLength, IsOptional } from 'class-validator';

@InputType()
export class ContactDto {
  @Field({ nullable: false })
  @IsNotEmpty()
  @MaxLength(50)
  firstName: string;

  @Field({ nullable: false })
  @IsNotEmpty()
  @MaxLength(50)
  lastName: string;

  @Field({ nullable: true })
  @IsOptional()
  @MaxLength(50)
  nickName: string;

  @Field((type) => [String], { nullable: false })
  @IsNotEmpty()
  @IsArray()
  phoneNumbers: string[];

  @Field({ nullable: false })
  @IsNotEmpty()
  @MaxLength(100)
  address: string;

  @Field({ nullable: false })
  @IsNotEmpty()
  @MaxLength(1000)
  photo: string;
}
