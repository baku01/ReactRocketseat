import styles from "./Post.module.css";
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";
import { useState } from "react";

interface PostProps {
  content: string;
}

interface CommentProps {
  id: number;
  content: string;
}

export function Post({ content }: PostProps) {
  const [comments, setComments] = useState<CommentProps[]>([
    { id: 1, content: "Muito Bacana seu post!" },
    { id: 2, content: "Post muito foda!" },
    { id: 3, content: "Post Muito informativo!" },
  ]);

  const [textValue, setTextValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleTextChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setTextValue(event.target.value);
    if (event.target.value.trim().length > 0) {
      setErrorMessage("");
      event.target.setCustomValidity("");
    }
  }

  function handleFormSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (textValue.trim() === "") {
      setErrorMessage("Digite um comentário válido.");
      return;
    }

    const newComment = {
      id: comments.length + 1,
      content: textValue,
    };

    setComments((prevComments) => [...prevComments, newComment]);

    setTextValue("");
  }

  function deleteComment(contentToDelete: string) {
    setComments((prevComments) =>
      prevComments.filter((comment) => comment.content !== contentToDelete),
    );
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            url="https://github.com/baku01.png"
            alt="Foto de Perfil do comentario"
          />
          <div>
            <div className={styles.authorInfo}>
              <strong>Pedro Correa Siqueira</strong>
              <span>Desenvolvedor Full Stack</span>
            </div>
          </div>
        </div>
        <time dateTime="2024-05-11 08:13:08"> Publicado a 1h </time>
      </header>
      <div className={styles.content}>
        <p>{content}</p>
        <a href="##">#Tecnologia</a> <a href="##">#React</a>
      </div>

      <form className={styles.commentForm} onSubmit={handleFormSubmit}>
        <strong> Deixe seu feedback </strong>
        <textarea
          value={textValue}
          onChange={handleTextChange}
          placeholder="Deixe seu feedback"
          onInvalid={(event) => {
            event.preventDefault();
            event.currentTarget.setCustomValidity(
              "Digite um comentário válido",
            );
          }}
        />
        {errorMessage && (
          <span className={styles.errorMessage}>{errorMessage}</span>
        )}

        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment.id}
              content={comment.content}
              deleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
