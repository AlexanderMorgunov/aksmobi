import { FC, useState } from "react";
import { UiButton } from "../../../../../shared/ui/UiButton/UiButton";
import { UiInputDocument } from "../../../../../shared/ui/UiInputDocument/UiInputDocument";
import styles from "./DocumentForm.module.scss";

interface IProps extends React.HTMLAttributes<HTMLFormElement> {
  docTitle: string | React.ReactNode;
  description: string | React.ReactNode;
}

const DocumentForm: FC<IProps> = ({
  docTitle: title,
  description,
  ...props
}) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className={styles["DocumentForm-wrapper"]}>
      <div className={styles["DocumentForm-title"]}>{title}</div>
      <div className={styles["DocumentForm-description"]}>{description}</div>
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
