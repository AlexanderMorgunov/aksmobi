import { FC } from "react";
import { UiModal } from "../UiModal/UiModal";
import styles from "./UiFormModal.module.scss";
import crossImage from "./assets/cross.svg";

interface IProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const UiFormModal: FC<IProps> = ({ children, setIsOpen, ...props }) => {
  return (
    <UiModal setIsOpen={setIsOpen}>
      <form className={styles["UiFormModal"]} {...props}>
        <div className={styles["UiFormModal-heder"]}>
          <div className={styles["UiFormModal-heder-text"]}>
            Заполните форму <br />и с вами свяжутся <br />в ближайшее время
          </div>
          <button
            className={styles["UiFormModal-heder-cross"]}
            onClick={() => setIsOpen(false)}
          >
            <img src={crossImage} alt="cross" />
          </button>
        </div>
        <div className={styles["UiFormModal-form"]}>{children}</div>
      </form>
    </UiModal>
  );
};

export { UiFormModal };
