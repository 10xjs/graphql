import { GraphQLResolveInfo } from "graphql";
import { Ctx, Info, Query, Resolver, Args } from "type-graphql";

import { Context } from "../context";

import { Plot, PlotConnection } from "../types/plot";
import { ConnectionArgs } from "../types/connection-args";
import { PlotArgs } from "../types/plot-args";

@Resolver(() => Plot)
export class PlotResolver {
  @Query(() => [Plot])
  async plots(
    @Ctx() ctx: Context,
    @Info() info: GraphQLResolveInfo,
    @Args() args: ConnectionArgs
  ): Promise<PlotConnection> {
    throw new Error("Not implemented.");
  }

  @Query(() => Plot, { nullable: true })
  async plot(
    @Ctx() ctx: Context,
    @Info() info: GraphQLResolveInfo,
    @Args() args: PlotArgs
  ): Promise<Plot | null> {
    throw new Error("Not implemented.");
  }
}
