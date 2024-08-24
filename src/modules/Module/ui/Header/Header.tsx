import { UiButton } from "../../../../shared/ui/UiButton/UiButton";
import styles from "./Header.module.scss";
import logoImgSrc from "./../../../../shared/assets/logo.svg";

const Header = () => {
  return (
    <div className={styles["header-wrapper"]}>
      <a className={styles["logo"]} href="#">
        <img src={logoImgSrc} />
      </a>
      <ul>
        <li>Наши услуги</li>
        <li>Бренды</li>
        <li>Отзывы</li>
      </ul>
      <div className={styles["phone-wrapper"]}>
        <a className={styles["phone"]} href="tel:+83433112111">
          +8 (343) 311-21-11
        </a>
      </div>
      <div className={styles["button-wrapper"]}>
        <UiButton variant="outline">Перезвонить мне</UiButton>
      </div>
    </div>
  );
};

export { Header };
