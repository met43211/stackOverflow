import { useSearchStore } from "@/store/searchStore";
import styles from "./Questions.module.scss";
import { SearchResultType } from "@/types/SearchResultType";
import Question from "./Question";

function Questions() {
  const { searchResults } = useSearchStore((state) => state);
  return (
    <div className={styles["questions"]}>
      <h2>Результаты поиска:</h2>
      {searchResults.length ? (
        <table className={styles["table"]}>
          <thead>
            <tr className={styles["table-header"]}>
              <th className={styles["author"]}>Автор</th>
              <th className={styles["title"]}>Вопрос</th>
              <th className={styles["answers"]}>Кол-во ответов</th>
              <th className={styles["tags"]}>Теги</th>
            </tr>
          </thead>
          <tbody>
            {searchResults.map((obj: SearchResultType) => (
              <Question {...obj} key={obj.question_id} />
            ))}
          </tbody>
        </table>
      ) : (
        <h3>Пусто :(</h3>
      )}
    </div>
  );
}

export default Questions;
