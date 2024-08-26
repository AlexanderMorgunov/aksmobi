import { FC } from "react";
import styles from "./UiCheckbox.module.scss";
import { CheckMark } from "../../CheckMark";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  onChange: () => void;
  checked: boolean;
}
const UiCheckbox: FC<IProps> = ({ label, onChange, checked, ...props }) => {
  return (
    <div className={styles["UiCheckbox-wrapper"]} onClick={() => onChange()}>
      <div className={styles["UiCheckbox"]}>
        <input type="checkbox" {...props} id={label} />
        {checked && (
          <span>
            <CheckMark />
          </span>
        )}
      </div>
      <div className={styles["UiCheckbox-label"]}>{label}</div>
    </div>
  );
};

export { UiCheckbox };
