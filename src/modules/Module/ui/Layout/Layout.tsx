import { FC } from "react";
import styles from "./Layout.module.scss";

interface IProps {
  header: JSX.Element;
  main: JSX.Element;
  footer: JSX.Element;
}

const Layout: FC<IProps> = ({ header, main, footer }) => {
  return (
    <div className={styles["layout_outside_wrapper"]}>
      <div className={styles["wrapper"]}>
        {header}
        {main}
        {footer}
      </div>
    </div>
  );
};

export { Layout };
