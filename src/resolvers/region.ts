import { GraphQLResolveInfo } from "graphql";
import { Ctx, Info, Query, Resolver, Args } from "type-graphql";

import { Context } from "../context";

import { Region, RegionConnection } from "../types/region";
import { ConnectionArgs } from "../types/connection-args";
import { RegionArgs } from "../types/region-args";

@Resolver(() => Region)
export class RegionResolver {
  @Query(() => [Region])
  async regions(
    @Ctx() ctx: Context,
    @Info() info: GraphQLResolveInfo,
    @Args() args: ConnectionArgs
  ): Promise<RegionConnection> {
    throw new Error("Not implemented.");
  }

  @Query(() => Region, { nullable: true })
  async region(
    @Ctx() ctx: Context,
    @Info() info: GraphQLResolveInfo,
    @Args() args: RegionArgs
  ): Promise<Region | null> {
    throw new Error("Not implemented.");
  }
}
