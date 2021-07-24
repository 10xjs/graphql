import { GraphQLResolveInfo } from "graphql";
import { Ctx, Info, Query, Resolver, Args } from "type-graphql";

import { Context } from "../context";

import { Team, TeamConnection } from "../types/team";
import { ConnectionArgs } from "../types/connection-args";
import { TeamArgs } from "../types/team-args";

@Resolver(() => Team)
export class TeamResolver {
  @Query(() => [Team])
  async teams(
    @Ctx() ctx: Context,
    @Info() info: GraphQLResolveInfo,
    @Args() args: ConnectionArgs
  ): Promise<TeamConnection> {
    throw new Error("Not implemented.");
  }

  @Query(() => Team, { nullable: true })
  async team(
    @Ctx() ctx: Context,
    @Info() info: GraphQLResolveInfo,
    @Args() args: TeamArgs
  ): Promise<Team | null> {
    throw new Error("Not implemented.");
  }
}
