import { UiButton } from "../../../../shared/ui/UiButton/UiButton";
import styles from "./Header.module.scss";
import logoImgSrc from "./../../../../shared/assets/logo.svg";
import { useIsMobile } from "../../../../shared/hooks/useIsMobile";
import burger from "./assets/menu.svg";
import phone from "./assets/telephone.svg";

const desktopContent = (
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

const mobileContent = (
  <div className={styles["header-wrapper-mobile"]}>
    <button className={styles["menu-button-mobile"]}>
      <img src={burger} alt="menu" />
    </button>
    <a className={styles["logo-mobile"]} href="#">
      <img src={logoImgSrc} />
    </a>
    <a className={styles["phone-mobile"]} href="tel:+83433112111">
      <img src={phone} alt="phone" />
    </a>
  </div>
);

const Header = () => {
  const { isMobile } = useIsMobile();
  return !isMobile ? desktopContent : mobileContent;
};

export { Header };
