import { Field, ObjectType } from "type-graphql";

import { Connection } from "./connection";
import { Edge } from "./edge";
import { Gamer, GamerConnection } from "./gamer";
import { Region } from "./region";

@ObjectType()
export class Team {
  @Field()
  name: string;

  @Field(() => GamerConnection)
  members: GamerConnection;

  @Field(() => Gamer)
  owner: Gamer;

  @Field(() => Region)
  region: Region;
}

@ObjectType()
export class TeamEdge extends Edge("Team", Team) {}

@ObjectType()
export class TeamConnection extends Connection("Team", TeamEdge) {}
