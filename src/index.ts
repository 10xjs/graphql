// Allows type-graphql to do runtime reflection on types (needed for generating the schema)
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server-koa";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

import Koa from "koa";

import { GamerResolver } from "./resolvers/gamer";
import { PlotResolver } from "./resolvers/plot";
import { RegionResolver } from "./resolvers/region";
import { TeamResolver } from "./resolvers/team";

export async function init() {
  const schema = await buildSchema({
    resolvers: [GamerResolver, PlotResolver, RegionResolver, TeamResolver],
  });

  const server = new ApolloServer({
    schema,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  });
  await server.start();

  const app = new Koa();
  app.use(server.getMiddleware({ path: "/graphql" }));

  await new Promise<void>((resolve) => app.listen({ port: 4000 }, resolve));

  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

init();
