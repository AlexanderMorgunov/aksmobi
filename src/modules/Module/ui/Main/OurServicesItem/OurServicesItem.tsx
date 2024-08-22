import { FC } from "react";
import styles from "./OurServicesItem.module.scss";
import clsx from "clsx";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  service: string;
  period: string;
  price: string;
  isActive: boolean;
}

const OurServicesItem: FC<IProps> = ({
  service,
  period,
  price,
  isActive,
  ...props
}) => {
  return (
    <div
      {...props}
      className={
        isActive
          ? clsx(
              styles["OurServicesItem-wrapper"],
              styles["OurServicesItem-wrapper_active"]
            )
          : styles["OurServicesItem-wrapper"]
      }
    >
      <div className={styles["OurServicesItem-title"]}>{service}</div>
      <div className={styles["OurServicesItem-info"]}>
        <div className={styles["OurServicesItem-period"]}>{period}</div>
        <div className={styles["OurServicesItem-price"]}>{price}</div>
      </div>
    </div>
  );
};

export { OurServicesItem };
