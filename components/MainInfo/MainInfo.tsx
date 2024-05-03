import styles from "./MainInfo.module.scss";

function MainInfo() {
  return (
    <div className={styles["info"]}>
      <h1 className={styles["title"]}>StackOverflow Поиск</h1>
      <p>
        Здесь вы можете задать свой вопрос и получить ответ с ресурса
        StackOverflow
      </p>
    </div>
  );
}

export default MainInfo;
