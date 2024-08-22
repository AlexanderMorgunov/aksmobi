import { ArrowRightIcon } from "../ArrowRightIcon";
import styles from "./Disassemble.module.scss";

const Disassemble = () => {
  return (
    <div className={styles["Disassemble-wrapper"]}>
      <div className={styles["DisassembleIntoSpareParts"]}>
        <div className={styles["DisassembleIntoSpareParts-title"]}>
          Слишком сильные повреждения?
        </div>
        <div className={styles["DisassembleIntoSpareParts-description"]}>
          Сдайте ваше устройство на запчасти обратившись в наш сервис
        </div>
        <button className={styles["DisassembleIntoSpareParts-btn"]}>
          <span>Разобрать на запчасти</span> <ArrowRightIcon />
        </button>
        <div className={styles["info"]}></div>
      </div>
    </div>
  );
};

export { Disassemble };
