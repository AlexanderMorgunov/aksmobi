import { ArrowRightIcon } from "../ArrowRightIcon";
import { PhoneIcon } from "../PhoneIcon";
import styles from "./DisassembleBanners.module.scss";
import Phone from "./assets/backgroundWithBrokenPhone.png";
import { UiLink } from "../../../../../shared/ui/UiLink/UiLink";

const DisassembleBanners = () => {
  return (
    <div className={styles["Disassemble-wrapper"]}>
      <div className={styles["DisassembleIntoSpareParts"]}>
        <div className={styles["DisassembleBanner-title"]}>
          Слишком сильные повреждения?
        </div>
        <div className={styles["DisassembleIntoSpareParts-description"]}>
          Сдайте ваше устройство на запчасти обратившись в наш сервис
        </div>
        {/* <a
          className={clsx(
            styles["DisassembleBanner-link"],
            styles["DisassembleBanner-link-IntoSpareParts"]
          )}
          href="#"
        >
          <span>Разобрать на запчасти</span> <ArrowRightIcon />
        </a> */}
        <UiLink
          href="#"
          className={styles["DisassembleBanner-link-IntoSpareParts"]}
        >
          <span>Разобрать на запчасти</span> <ArrowRightIcon />
        </UiLink>
        <div className={styles["info"]}></div>
      </div>

      <div className={styles["DisassembleSeePrices-wrapper"]}>
        <div className={styles["DisassembleSeePrices"]}>
          <div className={styles["DisassembleBanner-title"]}>
            Ознакомится с более точными ценами
          </div>
          {/* <a
            className={clsx(
              styles["DisassembleBanner-link"],
              styles["DisassembleBanner-link-SeePrices"]
            )}
            href="tel+79610988111"
          >
            <PhoneIcon />
            <span>89610988111</span>
          </a> */}
          <UiLink
            href="tel+79610988111"
            className={styles["DisassembleBanner-link-SeePrices"]}
          >
            <PhoneIcon />
            <span>89610988111</span>
          </UiLink>
        </div>
        <div className={styles["imageContainer"]}>
          <img src={Phone} alt="Phone" />
        </div>
      </div>
    </div>
  );
};

export { DisassembleBanners };
