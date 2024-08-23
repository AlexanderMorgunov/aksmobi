import { FC } from "react";
import styles from "./UiInputDocument.module.scss";

type IProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const UiInputDocument: FC<IProps> = ({ ...props }) => {
  return (
    <div className={styles["UiInputDocument-wrapper"]}>
      <input {...props} />
    </div>
  );
};

export { UiInputDocument };
