import { GraphQLResolveInfo } from "graphql";
import { Args, Arg, Ctx, Info, Query, Resolver } from "type-graphql";

import { Context } from "../context";

import { Gamer, GamerConnection } from "../types/gamer";
import { ConnectionArgs } from "../types/connection-args";

@Resolver(() => Gamer)
export class GamerResolver {
  @Query(() => [Gamer])
  async gamers(
    @Ctx() ctx: Context,
    @Info() info: GraphQLResolveInfo,
    @Args() args: ConnectionArgs
  ): Promise<GamerConnection> {
    throw new Error("Not implemented.");
  }

  @Query(() => Gamer, { nullable: true })
  async gamer(
    @Arg("id") id: string,
    @Ctx() ctx: Context,
    @Info() info: GraphQLResolveInfo
  ): Promise<Gamer | null> {
    throw new Error("Not implemented.");
  }
}
