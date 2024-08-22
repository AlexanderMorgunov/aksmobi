import { FC } from "react";
import styles from "./ChoseModeItem.module.scss";
import clsx from "clsx";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  model: string | React.JSX.Element;
  image: React.JSX.Element;
  isActive: boolean;
}

const ChoseModeItem: FC<IProps> = ({ model, image, isActive, ...props }) => {
  return (
    <div className={styles["ChoseModeItem-wrapper"]} {...props}>
      <div
        className={
          isActive
            ? clsx(
                styles["ChoseModeItem-title"],
                styles["ChoseModeItem-title_active"]
              )
            : styles["ChoseModeItem-title"]
        }
      >
        {model}
      </div>
      <div className={styles["ChoseModeItem-image"]}>{image}</div>
    </div>
  );
};

export { ChoseModeItem };
