import { InputType, Int, Field } from '@nestjs/graphql';
import { IsInt, IsNotEmpty, MaxLength } from 'class-validator';

@InputType()
export class PhotoFilterDto {
  @Field({ nullable: false })
  @IsNotEmpty()
  @MaxLength(10)
  type: string;

  @Field(() => Int, { nullable: false })
  @IsNotEmpty()
  amount: number;

  @IsNotEmpty()
  @Field(() => Int, { nullable: false })
  @IsInt()
  contactId: number;
}
