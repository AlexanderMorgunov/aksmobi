import { FC } from "react";
import styles from "./ReviewItem.module.scss";
import { UserIcon } from "../UserIcon";

interface IProps {
  name: string;
  text: string;
}

const ReviewItem: FC<IProps> = ({ name, text }) => {
  return (
    <div className={styles["ReviewItem-wrapper"]}>
      <div className={styles["ReviewItem-title"]}>
        <div className={styles["ReviewItem-title-userIcon"]}>
          <UserIcon />
        </div>
        {name}
      </div>
      <div className={styles["ReviewItem-text"]}>{text}</div>
    </div>
  );
};

export { ReviewItem };
