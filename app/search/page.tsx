"use client";

import Header from "@/components/Header/Header";
import Questions from "@/components/Questions/Questions";
import Sort from "@/components/Sort/Sort";
import { fetchSearch } from "@/fetching/fetchSearch";
import { useSearchStore } from "@/store/searchStore";
import { useQuery } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import LoadingUI from "@/UI/Loader/Loader";
import Pagination from "@/components/Pagination/Pagination";

function Search() {
  const searchParams = useSearchParams();
  const intitle = searchParams.get("intitle");
  const sort = searchParams.get("sort");
  const page = searchParams.get("page");
  const router = useRouter();

  const { setSearchResults } = useSearchStore((state) => state);

  if (!sort || !intitle || !page) {
    router.push(`/`);
    return null;
  }

  const {
    data: questions,
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["questions", intitle, sort, page],
    queryFn: async () => {
      return fetchSearch({ intitle, sort, page });
    },
  });

  useEffect(() => {
    refetch();
  }, [intitle, sort, page]);

  useEffect(() => {
    if (questions) {
      setSearchResults(questions);
    }
  }, [questions]);

  if (isLoading) {
    return <LoadingUI />;
  }
  if (error) {
    return <h1>Error</h1>;
  }

  return (
    <>
      <Header />
      <Sort />
      <Pagination />
      <Questions />
      <Pagination />
    </>
  );
}

export default Search;
