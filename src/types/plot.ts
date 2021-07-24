import { Field, ID, ObjectType } from "type-graphql";

import { Connection } from "./connection";
import { Edge } from "./edge";
import { Gamer } from "./gamer";
import { RegionConnection } from "./region";
import { Team } from "./team";
import { Token } from "./token";

@ObjectType()
export class Plot {
  @Field()
  x: number;

  @Field()
  y: number;

  @Field(() => Token)
  token: Token;

  @Field(() => RegionConnection)
  regions: RegionConnection;

  @Field(() => Team)
  team: Team;

  @Field(() => Gamer)
  owner: Gamer;
}

@ObjectType()
export class PlotEdge extends Edge("Plot", Plot) {}

@ObjectType()
export class PlotConnection extends Connection("Plot", PlotEdge) {}
