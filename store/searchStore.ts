import { SearchResultType } from "@/types/SearchResultType";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface SearchStateI {
  searchResults: SearchResultType[];
  setSearchResults: (res: SearchResultType[]) => void;
}

export const useSearchStore = create<SearchStateI>()(
  devtools(
    immer((set) => ({
      searchResults: [],
      sort: "activity",
      setSearchResults: (res: SearchResultType[]) =>
        set((state) => {
          state.searchResults = res;
        }),
    }))
  )
);
