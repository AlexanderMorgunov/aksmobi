import { FC } from "react";
import styles from "./InfoBanner.module.scss";
import { useIsMobile } from "../../../../../shared/hooks/useIsMobile";

interface IProps {
  repairPhonesNumber: number | string;
}

const InfoBanner: FC<IProps> = ({ repairPhonesNumber }) => {
  const { isMobile } = useIsMobile();
  return (
    <div className={styles["InfoBanner-external-wrapper"]}>
      <div className={styles["InfoBanner-wrapper"]}>
        <div className={styles["InfoBanner-text"]}>
          <div className={styles["InfoBanner-column"]}></div>В своём стремлении
          улучшить пользовательский опыт мы упускаем, что базовые сценарии
          поведения пользователей формируют глобальную экономическую сеть и при
          этом - ограничены исключительно образом мышления. Дальнейшее развитие
          различных форм деятельности позволяет оценить значение благоприятных
          перспектив. Прежде всего, новая модель организационной деятельности
          играет определяющее значение для соответствующих условий активизации.
          Имеется спорная точка зрения, гласящая примерно следующее:
          непосредственные участники технического прогресса неоднозначны и будут
          объявлены нарушающими общечеловеческие нормы этики и морали.
          Банальные, но неопровержимые выводы, а также непосредственные
          участники технического прогресса и по сей день остаются уделом
          либералов, которые жаждут быть заблокированы в рамках своих
          собственных рациональных ограничений.
        </div>
        <div className={styles["quantityPhonesRepaired-wrapper"]}>
          <div className={styles["quantityPhonesRepaired-circle"]}>
            <div className={styles["quantityPhonesRepaired-number"]}>
              {repairPhonesNumber}
            </div>
          </div>
          <div className={styles["quantityPhonesRepaired-text"]}>
            СМАРТФОНОВ HUAWEI ОТРЕМОНТИРОВАНО
          </div>
        </div>
        {isMobile && (
          <div className={styles["InfoBanner-title_mobile"]}>Статистика</div>
        )}
      </div>
    </div>
  );
};

export { InfoBanner };
