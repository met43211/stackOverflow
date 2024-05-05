import { CommentType } from "@/types/CommentType";
import styles from "./Comments.module.scss";

function Comment({ owner, body }: CommentType) {
  return (
    <div className={styles["comment"]}>
      <h4>{owner.display_name}</h4>
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </div>
  );
}

export default Comment;
