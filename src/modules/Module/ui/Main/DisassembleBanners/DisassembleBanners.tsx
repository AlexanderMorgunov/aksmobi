import { ArrowRightIcon } from "../ArrowRightIcon";
import { PhoneIcon } from "../PhoneIcon";
import styles from "./DisassembleBanners.module.scss";
import Phone from "./assets/backgroundWithBrokenPhone.png";
import PhoneMobile from "./assets/backgroundWithBrokenPhone-mobile.png";
import { UiLink } from "../../../../../shared/ui/UiLink/UiLink";
import { useState } from "react";
import { DisassembleModal } from "../DisassembleModal/DisassembleModal";
import { ConfirmationModal } from "../ConfirmationModal/ConfirmationModal";
import { useIsMobile } from "../../../../../shared/hooks/useIsMobile";

const DisassembleBanners = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenConfimationModal, setIsOpenConfirmationModal] = useState(false);
  const { isMobile } = useIsMobile();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsOpenModal(false);
    console.log("submit");
    setIsOpenConfirmationModal(true);
  };
  return (
    <>
      <div className={styles["Disassemble-wrapper"]}>
        <div className={styles["DisassembleIntoSpareParts"]}>
          <div className={styles["DisassembleBanner-title"]}>
            Слишком сильные повреждения?
          </div>
          <div className={styles["DisassembleIntoSpareParts-description"]}>
            Сдайте ваше устройство на запчасти обратившись в наш сервис
          </div>
          <UiLink
            href="#"
            className={styles["DisassembleBanner-link-IntoSpareParts"]}
            onClick={() => setIsOpenModal(true)}
          >
            {!isMobile ? "Разобрать на запчасти" : "Посмотреть"}{" "}
            <ArrowRightIcon />
          </UiLink>
          <div className={styles["info"]}></div>
        </div>

        <div className={styles["DisassembleSeePrices-wrapper"]}>
          <div className={styles["DisassembleSeePrices"]}>
            <div className={styles["DisassembleBanner-title"]}>
              Ознакомится с более точными ценами
            </div>
            <UiLink
              href="tel+79610988111"
              className={styles["DisassembleBanner-link-SeePrices"]}
            >
              <PhoneIcon />
              89610988111
            </UiLink>
          </div>
          <div className={styles["imageContainer"]}>
            <img src={!isMobile ? Phone : PhoneMobile} alt="Phone" />
          </div>
        </div>
      </div>
      {isOpenModal && (
        <DisassembleModal
          setIsOpen={setIsOpenModal}
          handleSubmit={handleSubmit}
        />
      )}
      {isOpenConfimationModal && (
        <ConfirmationModal setIsOpen={setIsOpenConfirmationModal} />
      )}
    </>
  );
};

export { DisassembleBanners };
