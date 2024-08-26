import { FC, useState } from "react";
import { UiFormModal } from "../../../../../shared/ui/UiFormModal/UiFormModal";
import { UiInputModal } from "../../../../../shared/ui/UiInputModal/UiInputModal";
import { UiCheckbox } from "../../../../../shared/ui/UiCheckbox/UiCheckbox";
import { UiButton } from "../../../../../shared/ui/UiButton/UiButton";
import styles from "./OurServicesModal.module.scss";

interface IProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  serviceDescription: string;
}

const OurServicesModal: FC<IProps> = ({
  setIsOpen,
  handleSubmit,
  serviceDescription,
}) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [checked, setChecked] = useState(false);

  return (
    <UiFormModal setIsOpen={setIsOpen} onSubmit={handleSubmit}>
      <UiInputModal
        title="ВАШЕ ИМЯ:"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <UiInputModal
        title="ВАШ ТЕЛЕФОН:"
        placeholder="+7 (000) 000-00-00"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <div className={styles["service-title"]}>Услуга:</div>
      <div className={styles["service-description"]}>{serviceDescription}</div>
      <UiCheckbox
        checked={checked}
        onChange={() => setChecked(!checked)}
        label="Я соглашаюсь на обработку персональных данных и с политикой конфиденциальности"
        required
      />
      <div className={styles["btn-container"]}>
        <UiButton variant="contained" type="submit" className={styles["btn"]}>
          Отправить
        </UiButton>
      </div>
    </UiFormModal>
  );
};

export { OurServicesModal };
