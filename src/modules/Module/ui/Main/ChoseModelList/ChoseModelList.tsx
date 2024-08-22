import { FC } from "react";
import styles from "./ChoseModelList.module.scss";
import { UiButton } from "../../../../../shared/ui/UiButton/UiButton";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  showMore?: () => void;
}

const ChoseModelList: FC<IProps> = ({ children, showMore }) => {
  return (
    <div className={styles["ChoseModelList-external-wrapper"]}>
      <div className={styles["ChoseModelList-main-title"]}>Выберите модель</div>
      <div className={styles["ChoseModelList-title"]}>Выберите свою модель</div>
      <div className={styles["ChoseModelList-wrapper"]}>{children}</div>
      <div className={styles["btn-container"]}>
        <UiButton variant="contained" onClick={showMore}>
          Показать еще
        </UiButton>
      </div>
    </div>
  );
};

export { ChoseModelList };
