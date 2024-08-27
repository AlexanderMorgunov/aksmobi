import { FC } from "react";
import styles from "./HowWeWorks.module.scss";
import { UiCarouselControlPanel } from "../../../../../shared/ui/UiCarouselControlPanel/UiCarouselControlPanel";
import { useIsMobile } from "../../../../../shared/hooks/useIsMobile";

interface IProps {
  children: React.ReactNode[];
}

const HowWeWorks: FC<IProps> = ({ children }) => {
  const { isMobile } = useIsMobile();
  return (
    <div className={styles["HowWeWorks-external-wrapper"]}>
      <h2 className={styles["HowWeWorks-title"]}>Как мы работаем?</h2>
      <div className={styles["HowWeWorks-carousel"]}>{children}</div>
      {isMobile && <UiCarouselControlPanel currentPage={1} numberOfPages={9} />}
    </div>
  );
};

export { HowWeWorks };
