import { FC } from "react";
import styles from "./ReviewsList.module.scss";
import { ArrowLeftSmallIcon } from "../ArrowLeftSmallIcon";
import { ArrowRightSmallIcon } from "../ArrowRightSmallIcon";

interface IProps {
  children: React.ReactNode;
}

const ReviewsList: FC<IProps> = ({ children }) => {
  return (
    <div className={styles["Reviews-external-wrapper"]}>
      <div className={styles["Reviews-wrapper"]}>
        <div className={styles["Reviews-title"]}>Отзывы</div>
        <div className={styles["Reviews-carousel-wrapper"]}>
          <div className={styles["arrow-wrapper-left"]}>
            <ArrowLeftSmallIcon />
          </div>
          <div className={styles["Reviews-carousel"]}>{children}</div>
          <div className={styles["arrow-wrapper-right"]}>
            <ArrowRightSmallIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export { ReviewsList };
