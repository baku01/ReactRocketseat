import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import "./global.css";
import styles from "./App.module.css";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post content="Conteúdo do post" />
          <Post content="Conteúdo do post" />
          <Post content="Conteúdo do post" />
          <Post content="Conteúdo do post" />
        </main>
      </div>
    </div>
  );
}
