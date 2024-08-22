import { FC } from "react";
import styles from "./Advantages.module.scss";

interface IProps {
  children: React.ReactNode | React.ReactNode[];
}

const Advantages: FC<IProps> = ({ children }) => {
  return (
    <div className={styles["advantages-external-wrapper"]}>
      <div className={styles["advantages-content-wrapper"]}>{children}</div>
    </div>
  );
};

export { Advantages };
