"use client";

import { useQuery } from "@tanstack/react-query";
import styles from "./Question.module.scss";
import { fetchQuestion } from "@/fetching/fetchQuestion";
import Tag from "@/UI/Tag/Tag";
import Link from "next/link";

function Question({ id }: { id: number }) {
  const { data: question, error } = useQuery({
    queryKey: ["question"],
    queryFn: async () => {
      return fetchQuestion({ id });
    },
  });
  if (error) {
    return <h1>Error</h1>;
  }
  return (
    <div className={styles["question"]}>
      <Link href={question ? question.owner.link : ""}>
        <h1>Автор - {question?.owner.display_name}</h1>
      </Link>
      <p className={styles["reputation"]}>
        Репутатция - {question?.owner.reputation}
      </p>
      <div className={styles["tags"]}>
        {question?.tags.map((tag: string, index: number) => (
          <div className={styles["tag"]} key={index}>
            <Tag tag={tag}></Tag>
          </div>
        ))}
      </div>
      <h2>
        Вопрос:
        <br />
        {question?.title}
      </h2>
      <p className={styles["view"]}>Просмотры - {question?.view_count}</p>
      <p className={styles["answers"]}>Ответы - {question?.answer_count}</p>
    </div>
  );
}

export default Question;
