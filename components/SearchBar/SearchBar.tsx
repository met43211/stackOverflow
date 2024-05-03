"use client";

import Input from "@/UI/Input.tsx/StringInput";
import styles from "./SearchBar.module.scss";
import Button from "@/UI/Button.tsx/Button";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [intitle, setIntitle] = useState(searchParams.get("intitle") || "");
  const handleSearch = () => {
    if (intitle.trim()) {
      router.push(
        `/search?intitle=${encodeURIComponent(intitle)}&sort=activity&page=1`
      );
    }
  };
  return (
    <form
      className={styles["search"]}
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch();
      }}
    >
      <Input
        value={intitle}
        setValue={setIntitle}
        type="search"
        placeholder="Введите ваш вопрос..."
      />
      <Button type={"submit"}>Поиск</Button>
    </form>
  );
}

export default SearchBar;
