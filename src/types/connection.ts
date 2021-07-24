import * as Relay from "graphql-relay";
import { ObjectType, Field, ClassType } from "type-graphql";

import { PageInfo } from "./page-info";

export function Connection<
  TEdge extends Relay.Edge<TNode>,
  TNode = TEdge extends Relay.Edge<infer TNode> ? TNode : never
>(nodeName: string, edgeClass: ClassType<TEdge>) {
  @ObjectType(`${nodeName}Connection`, { isAbstract: true })
  abstract class Connection implements Relay.Connection<TNode> {
    @Field(() => PageInfo)
    pageInfo: PageInfo;

    @Field(() => [edgeClass])
    edges: TEdge[];
  }

  return Connection;
}
