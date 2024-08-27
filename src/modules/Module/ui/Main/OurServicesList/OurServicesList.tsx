import { FC, useState } from "react";
import styles from "./OurServicesList.module.scss";
import { IOurServicesItemData } from "../../../../../shared/types/IOurServicesItemData";
import { OurServicesModal } from "../OurServicesModal/OurServicesModal";
import { ConfirmationModal } from "../ConfirmationModal/ConfirmationModal";

interface IProps {
  children: React.ReactNode;
  activeServicesItem: IOurServicesItemData | null;
  isOpenModal: boolean;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const OurServicesList: FC<IProps> = ({
  children,
  activeServicesItem,
  isOpenModal,
  setIsOpenModal,
}) => {
  const [isOpenConfimationModal, setIsOpenConfirmationModal] = useState(false);

  const handleSubmit = () => {
    setIsOpenModal(false);
    console.log("submit");
    setIsOpenConfirmationModal(true);
  };
  return (
    <>
      <div className={styles["OurServices-external-wrapper"]}>
        <div className={styles["OurServices-title"]}>Наши услуги</div>
        <div className={styles["OurServices-description"]}>
          Мы сможем отремонтировать любой вид техники, вот наиболее часто
          заказываемые у нас услуги
        </div>
        <div className={styles["OurServices-wrapper"]}>{children}</div>
      </div>
      {isOpenModal && (
        <OurServicesModal
          handleSubmit={handleSubmit}
          setIsOpen={setIsOpenModal}
          serviceDescription={activeServicesItem?.title || ""}
        />
      )}
      {isOpenConfimationModal && (
        <ConfirmationModal setIsOpen={setIsOpenConfirmationModal} />
      )}
    </>
  );
};

export { OurServicesList };
