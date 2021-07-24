import { Field, ObjectType } from "type-graphql";

import { Team } from "./team";
import { PlotConnection } from "./plot";
import { Edge } from "./edge";
import { Connection } from "./connection";

@ObjectType()
export class Region {
  @Field()
  team: Team;

  @Field()
  isGlobal: boolean;

  @Field(() => PlotConnection)
  plots: PlotConnection;
}

@ObjectType()
export class RegionEdge extends Edge("Region", Region) {}

@ObjectType()
export class RegionConnection extends Connection("Region", RegionEdge) {}
