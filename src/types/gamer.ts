import * as Relay from "graphql-relay";
import { Field, ID, ObjectType } from "type-graphql";

import { PlotConnection } from "./plot";
import { Edge } from "./edge";
import { Connection } from "./connection";

@ObjectType()
export class Gamer {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field(() => GamerConnection)
  friends: Relay.Connection<Gamer>;

  @Field()
  plots: PlotConnection;
}

@ObjectType()
export class GamerEdge extends Edge("Gamer", Gamer) {}

@ObjectType()
export class GamerConnection extends Connection("Gamer", GamerEdge) {}
