import { FC, useEffect } from "react";
import styles from "./UiModal.module.scss";

interface IProps {
  children: React.ReactNode;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const UiModal: FC<IProps> = ({ children, setIsOpen }) => {
  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    });
    return () => {
      window.removeEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          setIsOpen(false);
        }
      });
    };
  }, [setIsOpen]);

  const handleClose = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <div className={styles["UiModal-wrapper"]} onClick={handleClose}>
      {children}
    </div>
  );
};

export { UiModal };
