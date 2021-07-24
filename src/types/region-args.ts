import { Field, ArgsType, ID } from "type-graphql";

@ArgsType()
export class RegionArgs {
  @Field(() => ID)
  id: string;
}
