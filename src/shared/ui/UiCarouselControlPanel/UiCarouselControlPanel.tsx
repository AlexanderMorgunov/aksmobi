import { FC } from "react";
import styles from "./UiCarouselControlPanel.module.scss";
import { ArrowLeftCarousel } from "../../../modules/Module/ui/Main/ArrowLeftCarousel";
import { ArrowRightCarousel } from "../../../modules/Module/ui/Main/ArrowRightCarousel";

interface IProps {
  currentPage: number;
  numberOfPages: number;
}

const UiCarouselControlPanel: FC<IProps> = ({ currentPage, numberOfPages }) => {
  return (
    <div className={styles["UiCarouselControlPanel-wrapper"]}>
      <div className={styles["UiCarouselControlPanel-arrow-left"]}>
        <ArrowLeftCarousel isActive={true} />
      </div>
      <div className={styles["UiCarouselControlPanel-page"]}>
        <span className={styles["UiCarouselControlPanel-page-current"]}>
          {currentPage < 10 ? `0${currentPage}` : currentPage}
        </span>
        /{numberOfPages < 10 ? `0${numberOfPages}` : numberOfPages}
      </div>
      <div className={styles["UiCarouselControlPanel-arrow-right"]}>
        <ArrowRightCarousel />
      </div>
    </div>
  );
};

export { UiCarouselControlPanel };
