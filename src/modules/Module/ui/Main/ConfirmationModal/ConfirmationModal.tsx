import { FC } from "react";
import { UiModal } from "../../../../../shared/ui/UiModal/UiModal";
import styles from "./ConfirmationModal.module.scss";
import OkImage from "./assets/checkedMark.svg";
import crossImage from "./assets/crossOrange.svg";

interface IProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ConfirmationModal: FC<IProps> = ({ setIsOpen }) => {
  return (
    <UiModal setIsOpen={setIsOpen}>
      <div className={styles["modal-wrapper"]}>
        <div className={styles["modal-title"]}>Спасибо за заявку!</div>
        <div className="image-container">
          <img src={OkImage} alt="V" />
        </div>
        <div className={styles["modal-text"]}>Наш менеджер свяжется с Вами</div>
        <button
          className={styles["modal-heder-cross"]}
          onClick={() => setIsOpen(false)}
        >
          <img src={crossImage} alt="cross" />
        </button>
      </div>
    </UiModal>
  );
};

export { ConfirmationModal };
