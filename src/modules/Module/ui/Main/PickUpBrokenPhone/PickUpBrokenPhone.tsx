import { FC, useState } from "react";
import styles from "./PickUpBrokenPhone.module.scss";
import { UiButton } from "../../../../../shared/ui/UiButton/UiButton";
import { UiInputDocument } from "../../../../../shared/ui/UiButton/UiInputDocument/UiInputDocument";
// import { UiInputDocument } from "../../../../../shared/ui/UiButton/UiInputDocument/UiInputDocument";

type IProps = React.HTMLAttributes<HTMLFormElement>;

const PickUpBrokenPhone: FC<IProps> = ({ ...props }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className={styles["PickUpBrokenPhone-wrapper"]}>
      <div className={styles["PickUpBrokenPhone-title"]}>
        Заберем ваш сломанный смартфон прямо из дома
      </div>
      <div className={styles["PickUpBrokenPhone-description"]}>
        Оставьте Ваш номер телефона и мы перезвоним Вам{" "}
        <span className={styles["PickUpBrokenPhone-description-bold"]}>
          прямо сейчас
        </span>
        .
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

export { PickUpBrokenPhone };
