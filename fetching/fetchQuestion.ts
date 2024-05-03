import axios from "@/axios";
import { GetedQuestion, QuestionType } from "@/types/QuestionType";

interface ParamsI {
  id: number;
}

export const fetchQuestion = async ({ id }: ParamsI) => {
  const params = {
    order: "desc",
    sort: "activity",
    site: "stackoverflow",
    access_token: process.env.NEXT_PUBLIC_TOKEN,
    key: process.env.NEXT_PUBLIC_KEY,
  };
  const { data } = await axios.get<GetedQuestion>(`2.3/questions/${id}`, {
    params,
  });
  return data.items[0] as QuestionType;
};
