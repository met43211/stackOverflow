import axios from "@/axios";
import { CommentType, GetedComments } from "@/types/CommentType";

interface ParamsI {
  id: number;
}

export const fetchComments = async ({ id }: ParamsI) => {
  const params = {
    site: "stackoverflow",
    access_token: process.env.NEXT_PUBLIC_TOKEN,
    key: process.env.NEXT_PUBLIC_KEY,
    filter: "withbody",
  };
  const { data } = await axios.get<GetedComments>(
    `2.3/questions/${id}/comments`,
    {
      params,
    }
  );
  return data.items as CommentType[];
};
