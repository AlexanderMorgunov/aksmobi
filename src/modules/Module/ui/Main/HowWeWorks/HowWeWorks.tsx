import { FC } from "react";
import styles from "./HowWeWorks.module.scss";

interface IProps {
  children: React.ReactNode[];
}

const HowWeWorks: FC<IProps> = ({ children }) => {
  return (
    <div className={styles["HowWeWorks-external-wrapper"]}>
      <h2 className={styles["HowWeWorks-title"]}>Как мы работаем?</h2>
      <div className={styles["HowWeWorks-carousel"]}>{children}</div>
    </div>
  );
};

export { HowWeWorks };
