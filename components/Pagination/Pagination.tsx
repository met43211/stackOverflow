"useClient";

import Button from "@/UI/Button.tsx/Button";
import styles from "./Pagination.module.scss";
import { useCallback, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useSearchStore } from "@/store/searchStore";
import { usePaginationStore } from "@/store/paginationStore";

function Pagination() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const pageFromQuery = searchParams.get("page");
  const { page, setPage } = usePaginationStore((state) => state);
  const { searchResults } = useSearchStore((state) => state);

  useEffect(() => {
    setPage(Number(pageFromQuery));
  }, [pageFromQuery]);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const handleNext = () => {
    if (searchResults.length) {
      router.push(pathname + "?" + createQueryString("page", String(page + 1)));
    }
  };
  const handlePrev = () => {
    if (page > 1) {
      router.push(pathname + "?" + createQueryString("page", String(page - 1)));
    }
  };
  return (
    <div className={styles["pagination"]}>
      <Button doing={handlePrev}>Назад</Button>
      <h3>{page}</h3>
      <Button doing={handleNext}>Вперед</Button>
    </div>
  );
}

export default Pagination;
