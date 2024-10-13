import styles from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1565843708714-52ecf69ab81f?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Imagem de capa"
      />
      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://github.com/baku01.png"
          alt="Foto de perfil"
        />
        <strong> Pedro Correa Siqueira</strong>
        <span>Desenvolvedor Full Stack</span>
      </div>

      <footer>
        <a href="##">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
