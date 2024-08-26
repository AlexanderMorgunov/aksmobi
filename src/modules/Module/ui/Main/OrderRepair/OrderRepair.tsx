import { UiButton } from "../../../../../shared/ui/UiButton/UiButton";
import styles from "./OrderRepair.module.scss";
import XIAOMIImgSrc from "../assets/xiaomi_phones_a3-global_1x 1.png";
import { useState } from "react";
import { OrderRepairModal } from "../OrderRepairModal/OrderRepairModal";

const OrderRepair = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <>
      <div className={styles["banner"]}>
        <div className={styles["banner-content"]}>
          <div className={styles["banner-title"]}>
            Ремонт <span>XIAOMI</span> в Екатеринбурге любой сложности
          </div>
          <div className={styles["banner-body"]}>
            <div className={styles["banner-body-text"]}>
              Ремонтируем устройства любой сложности в кратчайшие сроки и с
              гарантией до 3 месяцев
            </div>
            <div className={styles["banner-body-btn-container"]}>
              <UiButton
                variant="contained"
                onClick={() => setIsOpenModal(true)}
              >
                Заказать ремонт
              </UiButton>
            </div>
          </div>
        </div>
        <div className={styles["banner-img"]}>
          <img src={XIAOMIImgSrc} alt="XIAOMI" />
        </div>
      </div>
      {isOpenModal && <OrderRepairModal setIsOpen={setIsOpenModal} />}
    </>
  );
};

export { OrderRepair };
