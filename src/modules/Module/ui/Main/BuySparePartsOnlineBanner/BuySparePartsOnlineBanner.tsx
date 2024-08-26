import { UiLink } from "../../../../../shared/ui/UiLink/UiLink";
import { ArrowRightIcon } from "../ArrowRightIcon";
import styles from "./BuySparePartsOnlineBanner.module.scss";

const BuySparePartsOnlineBanner = () => {
  return (
    <div className={styles["BuySparePartsOnlineBanner"]}>
      <div className={styles["BuySparePartsOnlineBanner-title"]}>
        Покупайте запчасти онлайн
      </div>
      <div className={styles["BuySparePartsOnlineBanner-description"]}>
        Комплектующие на различные девайсы прямо со склада
      </div>
      <UiLink href="#">
        Посмотреть
        <ArrowRightIcon />
      </UiLink>
    </div>
  );
};

export { BuySparePartsOnlineBanner };
