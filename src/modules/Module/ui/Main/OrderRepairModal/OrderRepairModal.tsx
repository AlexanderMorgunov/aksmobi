import { FC, useState } from "react";
import { UiFormModal } from "../../../../../shared/ui/UiFormModal/UiFormModal";
import { UiInputModal } from "../../../../../shared/ui/UiInputModal/UiInputModal";
import { UiCheckbox } from "../../../../../shared/ui/UiCheckbox/UiCheckbox";
import { UiButton } from "../../../../../shared/ui/UiButton/UiButton";
import styles from "./OrderRepairModal.module.scss";

interface IProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const OrderRepairModal: FC<IProps> = ({ setIsOpen }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [checked, setChecked] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log({
      name: formData.get("name"),
      phone: formData.get("phone"),
      comment: formData.get("comment"),
      checked: formData.get("checked"),
    });
    setIsOpen(false);
  };
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
      <UiInputModal
        title="КОММЕНТАРИЙ (НЕОБЯЗАТЕЛЬНО):"
        placeholder="Введите ваши пожелания"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
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

export { OrderRepairModal };
