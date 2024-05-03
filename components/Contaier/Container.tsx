import styles from "./Container.module.scss";

function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["container"]}>{children}</div>
    </div>
  );
}

export default Container;
