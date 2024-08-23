import { FC, useState } from "react";
import { UiButton } from "../../../../../shared/ui/UiButton/UiButton";
import { UiInputDocument } from "../../../../../shared/ui/UiButton/UiInputDocument/UiInputDocument";
import styles from "./DocumentForm.module.scss";

interface IProps extends React.HTMLAttributes<HTMLFormElement> {
  title: string;
  description: string | React.ReactNode;
}

const DocumentForm: FC<IProps> = ({ title, description, ...props }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className={styles["DocumentForm-wrapper"]}>
      <div className={styles["DocumentForm-title"]}>
        {/* Заберем ваш сломанный смартфон прямо из дома */}
        {title}
      </div>
      <div className={styles["DocumentForm-description"]}>
        {description}
        {/* Оставьте Ваш номер телефона и мы перезвоним Вам{" "}
        <span className={styles["DocumentForm-description-bold"]}>
          прямо сейчас
        </span>
        . */}
      </div>
      <form action="#" {...props}>
        <UiInputDocument
          placeholder="Имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
        <UiInputDocument
          placeholder="+7 --- --- -- --"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="tel"
        />
        <UiButton variant="contained" type="submit">
          Перезвонить мне
        </UiButton>
      </form>
    </div>
  );
};

export { DocumentForm as DocumentForm };
