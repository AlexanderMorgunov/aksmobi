import { FC } from "react";
import styles from "./OurServicesList.module.scss";

interface IProps {
  children: React.ReactNode;
}

const OurServicesList: FC<IProps> = ({ children }) => {
  return (
    <div className={styles["OurServices-external-wrapper"]}>
      <div className={styles["OurServices-title"]}>Наши услуги</div>
      <div className={styles["OurServices-description"]}>
        Мы сможем отремонтировать любой вид техники, вот наиболее часто
        заказываемые у нас услуги
      </div>
      <div className={styles["OurServices-wrapper"]}>{children}</div>
    </div>
  );
};

export { OurServicesList };
