import { Owner } from "./OwnerType";

export interface GetedComments {
  items: CommentType[];
}

export interface CommentType {
  body: string;
  comment_id: number;
  owner: Owner;
}
