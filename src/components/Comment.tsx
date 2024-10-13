import styles from "./Comment.module.css";
import { ThumbsUp, Trash } from "phosphor-react";

interface CommentProps {
  content: string;
  deleteComment: (content: string) => void;
}

export function Comment({ content, deleteComment }: CommentProps) {
  function handleDeleteComment() {
    deleteComment(content);
  }

  return (
    <div className={styles.comment}>
      <img src="https://github.com/baku01.png" alt="" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Pedro Correa Siqueira</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">
                Cerca de 1h atrás
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir
            <span className={styles.applauseCount}>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
