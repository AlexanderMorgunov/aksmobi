import { FC } from "react";
import styles from "./UiCheckbox.module.scss";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  onChange: () => void;
  checked: boolean;
}

const UiCheckbox: FC<IProps> = ({ label, onChange, checked, ...props }) => {
  return (
    <label className={styles["UiCheckbox-label"]}>
      <input
        type="checkbox"
        {...props}
        id={label}
        checked={checked}
        onChange={onChange}
      />
      <span className={styles.checkbox}></span>
      <span className={styles["UiCheckbox-label-text"]}>{label}</span>
    </label>
  );
};

export { UiCheckbox };
