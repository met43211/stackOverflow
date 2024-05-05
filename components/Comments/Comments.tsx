"use client";

import { useQuery } from "@tanstack/react-query";
import styles from "./Comments.module.scss";
import { fetchComments } from "@/fetching/fetchComments";
import Comment from "./Comment";

function Comments({ id }: { id: number }) {
  const { data: comments, error } = useQuery({
    queryKey: ["comments"],
    queryFn: async () => {
      return fetchComments({ id });
    },
  });
  if (error) {
    return <h1>Error</h1>;
  }
  return (
    <div className={styles["comments"]}>
      {!!comments?.length ? (
        <>
          <h3>Комментарии:</h3>
          {comments?.map((comment) => (
            <Comment
              body={comment.body}
              owner={comment.owner}
              key={comment.comment_id}
            />
          ))}
        </>
      ) : (
        <h3>Нет комментариев</h3>
      )}
    </div>
  );
}

export default Comments;
