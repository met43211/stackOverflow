"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import styles from "./Sort.module.scss";
import { useCallback, useState } from "react";

function Sort() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [value, setValue] = useState(searchParams.get("sort") || "activity");

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      params.set("page", "1");
      return params.toString();
    },
    [searchParams]
  );

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
    router.push(pathname + "?" + createQueryString("sort", e.target.value));
  };
  return (
    <div className={styles["sort"]}>
      <h2>Сортировка:</h2>
      <select
        name="sort"
        onChange={handleSortChange}
        value={value}
        className={styles["select"]}
      >
        <option value="activity">Активность</option>
        <option value="votes">Голоса</option>
        <option value="creation">Создание</option>
        <option value="relevance">Актуальность</option>
      </select>
    </div>
  );
}

export default Sort;
