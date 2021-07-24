import * as Relay from "graphql-relay";
import { ObjectType, Field, ArgsType, ClassType } from "type-graphql";

export function Edge<TNode>(nodeName: string, TNode: ClassType<TNode>) {
  @ObjectType(`${nodeName}Edge`, { isAbstract: true })
  abstract class Edge implements Relay.Edge<TNode> {
    @Field(() => TNode)
    node: TNode;

    @Field(() => String, {
      description: "Used in `before` and `after` args",
    })
    cursor: Relay.ConnectionCursor;
  }

  return Edge;
}
