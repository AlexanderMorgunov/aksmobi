import { FC } from "react";
import styles from "./UiInputModal.module.scss";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  title: string;
}

const UiInputModal: FC<IProps> = ({ title, ...props }) => {
  return (
    <div className={styles["UiInputModal-wrapper"]}>
      <div className={styles["UiInputModal-title"]}>{title}</div>
      <div className={styles["UiInputModal"]}>
        <input {...props} />
      </div>
    </div>
  );
};

export { UiInputModal };
