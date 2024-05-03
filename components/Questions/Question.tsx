"use client";

import { SearchResultType } from "@/types/SearchResultType";
import styles from "./Questions.module.scss";
import Tag from "@/UI/Tag/Tag";
import { useRouter } from "next/navigation";

function Question({
  owner,
  tags,
  answer_count,
  title,
  question_id,
}: SearchResultType) {
  const router = useRouter();

  const handleQuestionClick = () => {
    router.push(`/questions/${question_id}`);
  };

  return (
    <tr className={styles["question"]} onClick={handleQuestionClick}>
      <td className={styles["author"]}>{owner.display_name}</td>
      <td className={styles["title"]}>{title}</td>
      <td className={styles["answers"]}>{answer_count}</td>
      <td className={styles["tags"]}>
        {tags.map((tag: string, index) => (
          <Tag tag={tag} key={index} />
        ))}
      </td>
    </tr>
  );
}

export default Question;
