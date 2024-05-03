import styles from "./Tag.module.scss";

function Tag({ tag }: { tag: string }) {
  return <div className={styles["tag"]}>#{tag}</div>;
}

export default Tag;
