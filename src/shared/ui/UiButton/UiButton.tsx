import { FC } from "react";
import clsx from "clsx";
import styles from "./UiButton.module.scss";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "outline" | "contained";
  classNames?: string;
}

const UiButton: FC<IProps> = ({ variant, classNames, ...props }) => {
  return (
    <button
      {...props}
      className={clsx(
        styles["btn"],
        styles[variant],
        props.className,
        classNames
      )}
    ></button>
  );
};

export { UiButton };
