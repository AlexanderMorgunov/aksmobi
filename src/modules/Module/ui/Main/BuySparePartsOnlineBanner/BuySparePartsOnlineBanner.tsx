import { useIsMobile } from "../../../../../shared/hooks/useIsMobile";
import { UiLink } from "../../../../../shared/ui/UiLink/UiLink";
import { ArrowRightIcon } from "../ArrowRightIcon";
import styles from "./BuySparePartsOnlineBanner.module.scss";

const BuySparePartsOnlineBanner = () => {
  const { isMobile } = useIsMobile();
  return (
    <div className={styles["BuySparePartsOnlineBanner"]}>
      <div className={styles["BuySparePartsOnlineBanner-title"]}>
        Покупайте запчасти онлайн
      </div>
      <div className={styles["BuySparePartsOnlineBanner-description"]}>
        Комплектующие на различные девайсы прямо со склада
      </div>
      <UiLink href="#">
        {!isMobile ? "Посмотреть" : "Разобрать на запчасти"}
        <ArrowRightIcon />
      </UiLink>
    </div>
  );
};

export { BuySparePartsOnlineBanner };
