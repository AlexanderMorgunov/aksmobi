import { FC } from "react";
import styles from "./HowWeWorksCarouselItem.module.scss";
import clsx from "clsx";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  image: React.JSX.Element;
  description: string | React.JSX.Element;
  number: number;
  isActive: boolean;
}

const HowWeWorksCarouselItem: FC<IProps> = ({
  image,
  description,
  number,
  isActive,
  ...props
}) => {
  return (
    <div
      className={
        isActive
          ? clsx(
              styles["HowWeWorksCarouselItem-wrapper"],
              styles["HowWeWorksCarouselItem-wrapper_active"]
            )
          : styles["HowWeWorksCarouselItem-wrapper"]
      }
      {...props}
    >
      <div className={styles["HowWeWorksCarouselItem-number"]}>
        {number < 10 ? `0${number}` : number}
      </div>
      <div className={styles["HowWeWorksCarouselItem-image-container"]}>
        {image}
      </div>
      <div
        // className={clsx(
        //   {
        //     false: styles["HowWeWorksCarouselItem-description"],
        //     true: styles["HowWeWorksCarouselItem-description_active"],
        //   }[`${isActive}`]
        // )}
        className={styles["HowWeWorksCarouselItem-description"]}
      >
        {description}
      </div>
    </div>
  );
};

export { HowWeWorksCarouselItem };
