import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface PaginationStateI {
  page: number;
  setPage: (page: number) => void;
}

export const usePaginationStore = create<PaginationStateI>()(
  devtools(
    immer((set) => ({
      page: 1,
      setPage: (page: number) =>
        set((state) => {
          state.page = page;
        }),
    }))
  )
);
