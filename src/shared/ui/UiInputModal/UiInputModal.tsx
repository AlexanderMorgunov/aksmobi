import { FC } from "react";
import styles from "./UiInputModal.module.scss";
import clsx from "clsx";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  title: string;
}

const UiInputModal: FC<IProps> = ({ title, ...props }) => {
  return (
    <div className={clsx(styles["UiInputModal-wrapper"], props.className)}>
      <div className={styles["UiInputModal-title"]}>{title}</div>
      <div className={styles["UiInputModal"]}>
        <input {...props} />
      </div>
    </div>
  );
};

export { UiInputModal };
