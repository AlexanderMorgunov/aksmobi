import { FC, useState } from "react";
import { UiFormModal } from "../../../../../shared/ui/UiFormModal/UiFormModal";
import { UiInputModal } from "../../../../../shared/ui/UiInputModal/UiInputModal";
import { UiCheckbox } from "../../../../../shared/ui/UiCheckbox/UiCheckbox";
import { UiButton } from "../../../../../shared/ui/UiButton/UiButton";
import styles from "./DisassembleModal.module.scss";
import { UiSelect } from "../../../../../shared/ui/UiSelect/UiSelect";
import { ISelectOptions } from "../../../../../shared/types/ISelectOptions";

interface IProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const DisassembleModal: FC<IProps> = ({ setIsOpen, handleSubmit }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [checked, setChecked] = useState(false);

  const optionTechnic: ISelectOptions[] = [
    {
      id: 0,
      title: "Ноутбук",
    },
    {
      id: 1,
      title: "Планшет",
    },
    {
      id: 2,
      title: "Смартфон",
    },
  ];

  const optionBrand: ISelectOptions[] = [
    {
      id: 0,
      title: "Apple",
    },
    {
      id: 1,
      title: "Samsung",
    },
    {
      id: 2,
      title: "Xiaomi",
    },
  ];

  const optionModels: ISelectOptions[] = [
    {
      id: 0,
      title: "Iphone 13",
    },
    {
      id: 1,
      title: "Iphone 12",
    },
    {
      id: 2,
      title: "Iphone 11",
    },
    {
      id: 3,
      title: "S22",
    },
    {
      id: 4,
      title: "S21",
    },
    {
      id: 5,
      title: "S20",
    },
  ];

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
      <UiSelect label="ТЕХНИКА" selectOptions={optionTechnic} />
      <div className={styles["select-wrapper"]}>
        <UiSelect label="БРЕНД" selectOptions={optionBrand} />
        <UiSelect label="МОДЕЛЬ" selectOptions={optionModels} />
      </div>
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

export { DisassembleModal };
