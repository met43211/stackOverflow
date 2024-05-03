import axios from "@/axios";
import { GetedSearchResults, SearchResultType } from "@/types/SearchResultType";

interface ParamsI {
  intitle: string;
  sort: string;
  page: string;
}

export const fetchSearch = async ({ intitle, sort, page }: ParamsI) => {
  const params = {
    order: "desc",
    sort,
    intitle,
    site: "stackoverflow",
    access_token: process.env.NEXT_PUBLIC_TOKEN,
    key: process.env.NEXT_PUBLIC_KEY,
    page,
  };
  const { data } = await axios.get<GetedSearchResults>(`2.3/search`, {
    params,
  });
  return data.items as SearchResultType[];
};
