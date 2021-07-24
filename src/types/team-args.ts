import { Field, ArgsType, ID } from "type-graphql";

@ArgsType()
export class TeamArgs {
  @Field()
  name: string;
}
