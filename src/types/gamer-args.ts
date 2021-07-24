import { Field, ArgsType, ID } from "type-graphql";

@ArgsType()
export class GamerArgs {
  @Field(() => ID)
  id: string;
}
