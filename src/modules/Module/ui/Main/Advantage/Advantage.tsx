import { FC } from "react";
import styles from "./Advantage.module.scss";
import clsx from "clsx";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  modelTitle: string;
  isActive?: boolean;
  classNames?: string;
}

const Advantage: FC<IProps> = ({
  children,
  modelTitle: title,
  classNames,
  isActive = false,
  ...props
}) => {
  return (
    <div className={styles["advantage-wrapper"]} {...props}>
      {children}{" "}
      <span
        className={clsx(
          styles["advantage-title"],
          isActive && styles["advantage-title_active"],
          classNames
        )}
      >
        {title}
      </span>
    </div>
  );
};

export { Advantage };
