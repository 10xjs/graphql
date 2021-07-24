import { Field, ArgsType, ID } from "type-graphql";

@ArgsType()
export class PlotArgs {
  @Field(() => ID, { nullable: true })
  id?: string;

  @Field(() => Number, { nullable: true })
  x?: number;

  @Field(() => Number, { nullable: true })
  y?: number;
}
