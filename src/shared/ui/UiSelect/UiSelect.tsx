import React, { FC, useId } from "react";
import styles from "./UiSelect.module.scss";
import { ISelectOptions } from "../../../shared/types/ISelectOptions";

interface IProps {
  label: string;
  selectOptions: ISelectOptions[];
}

const UiSelect: FC<IProps> = ({ label, selectOptions }) => {
  const SelectId = useId();
  return (
    <div className={styles["UiSelect-wrapper"]}>
      <label htmlFor={SelectId}>{label}:</label>
      <div className={styles["UiSelect"]}>
        <select name="select" id={SelectId}>
          {selectOptions.map((option) => (
            <option key={option.id} value={option.id}>
              {option.title}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export { UiSelect };
