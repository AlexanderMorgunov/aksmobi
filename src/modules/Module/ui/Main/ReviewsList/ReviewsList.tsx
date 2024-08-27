import { FC } from "react";
import styles from "./ReviewsList.module.scss";
import { ArrowLeftSmallIcon } from "../ArrowLeftSmallIcon";
import { ArrowRightSmallIcon } from "../ArrowRightSmallIcon";
import { reviewsData } from "./utils/reviewsData";
import { ReviewItem } from "../ReviewItem/ReviewItem";
import { useIsMobile } from "../../../../../shared/hooks/useIsMobile";
import { UiCarouselControlPanel } from "../../../../../shared/ui/UiCarouselControlPanel/UiCarouselControlPanel";

const ReviewsList: FC = () => {
  const { isMobile } = useIsMobile();
  return (
    <div className={styles["Reviews-external-wrapper"]}>
      <div className={styles["Reviews-wrapper"]}>
        <div className={styles["Reviews-title"]}>Отзывы</div>
        <div className={styles["Reviews-carousel-wrapper"]}>
          <div className={styles["arrow-wrapper-left"]}>
            {!isMobile && <ArrowLeftSmallIcon />}
          </div>
          <div className={styles["Reviews-carousel"]}>
            {reviewsData.map((item) => (
              <ReviewItem key={item.id} name={item.name} text={item.text} />
            ))}
          </div>
          <div className={styles["arrow-wrapper-right"]}>
            {!isMobile && <ArrowRightSmallIcon />}
          </div>
        </div>
        {isMobile && (
          <div className={styles["Reviews-control-panel"]}>
            <UiCarouselControlPanel currentPage={1} numberOfPages={9} />
          </div>
        )}
      </div>
    </div>
  );
};

export { ReviewsList };
