import * as Relay from "graphql-relay";
import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class PageInfo implements Relay.PageInfo {
  @Field()
  hasNextPage: boolean;

  @Field()
  hasPreviousPage: boolean;

  @Field()
  startCursor: Relay.ConnectionCursor | null;

  @Field()
  endCursor: Relay.ConnectionCursor | null;
}
