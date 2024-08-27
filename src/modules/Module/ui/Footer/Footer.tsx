import { UiButton } from "../../../../shared/ui/UiButton/UiButton";
import styles from "./Footer.module.scss";
import logoImgSrc from "./../../../../shared/assets/logo.svg";
import phone from "./assets/phone.svg";
import { useIsMobile } from "../../../../shared/hooks/useIsMobile";

const Footer = () => {
  const { isMobile } = useIsMobile();
  return (
    <>
      <div className={styles["footer-external-wrapper"]}>
        <div className={styles["footer-wrapper"]}>
          <a className={styles["logo"]} href="#">
            <img src={logoImgSrc} />
          </a>
          {isMobile && <div className={styles["footer-line"]}></div>}
          <ul>
            <li>Наши услуги</li>
            <li>Бренды</li>
            <li>Отзывы</li>
          </ul>
          {isMobile && <div className={styles["footer-line"]}></div>}
          <div className={styles["phone-wrapper"]}>
            {isMobile && <img src={phone} alt="phone" />}
            <a className={styles["phone"]} href="tel:+83433112111">
              +8 (343) 311-21-11
            </a>
          </div>
          <div className={styles["button-wrapper"]}>
            <UiButton variant="outline" className={styles["footer-btn"]}>
              Перезвонить мне
            </UiButton>
          </div>
          {isMobile && <div className={styles["footer-line"]}></div>}
        </div>
      </div>
      <div className={styles["copyright-wrapper"]}>
        <div className={styles["copyright"]}>
          Copyright 2020. Все права защищены
        </div>
        <div className={styles["info"]}>
          Дизайн, разработка, реклама by Axmobi 8961-098-81-11
        </div>
      </div>
    </>
  );
};

export { Footer };
