import { Field, ID, ObjectType } from "type-graphql";

import { Connection } from "./connection";
import { Edge } from "./edge";
import { Plot } from "./plot";

@ObjectType()
export class Token {
  @Field(() => ID)
  id: string;

  @Field()
  ownerAddress: string;

  @Field(() => Plot)
  plot: Plot;
}

@ObjectType()
export class TokenEdge extends Edge("Token", Token) {}

@ObjectType()
export class TokenConnection extends Connection("Token", TokenEdge) {}
