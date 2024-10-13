import styles from "./Avatar.module.css";

interface AvatarProps {
  url: string;
  alt: string;
}

export function Avatar({ url, alt }: AvatarProps) {
  return <img className={styles.avatar} src={url} alt={alt} />;
}
