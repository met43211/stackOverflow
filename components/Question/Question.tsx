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
      <Link href={question && question.owner.link ? question.owner.link : ""}>
        <h1>Автор - {question?.owner.display_name}</h1>
      </Link>
      <div className={styles["tags"]}>
        {question?.tags.map((tag: string, index: number) => (
          <div className={styles["tag"]} key={index}>
            <Tag tag={tag}></Tag>
          </div>
        ))}
      </div>
      {question && (
        <>
          <h3>Тема:</h3>
          <div dangerouslySetInnerHTML={{ __html: question.title }} />
        </>
      )}
      {question && (
        <>
          <h3>Вопрос:</h3>
          <div dangerouslySetInnerHTML={{ __html: question.body }} />
        </>
      )}
    </div>
  );
}

export default Question;
