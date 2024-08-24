import { useState } from "react";
import { Advantage } from "./Advantage/Advantage";
import { Advantages } from "./Advantages/Advantages";
import { Banner } from "./Banner/Banner";
import styles from "./Main.module.scss";
import { SettingsIcon } from "./SettingsIcon";
import { PriceIcon } from "./PriceIcon";
import { SpannerIcon } from "./SpannerIcon";
import { HowWeWorks } from "./HowWeWorks/HowWeWorks";
import carouselItem1Image from "./assets/carouselItem1.png";
import carouselItem2Image from "./assets/carouselItem2.png";
import carouselItem3Image from "./assets/carouselItem3.png";
import carouselItem4Image from "./assets/carouselItem4.png";
import { HowWeWorksCarouselItem } from "./HowWeWorksCarouselItem/HowWeWorksCarouselItem";
import XiaomiPhoneImg from "./assets/xiaomi-phone.png";
import { ChoseModeItem } from "./ChoseModeItem/ChoseModeItem";
import { ChoseModelList } from "./ChoseModelList/ChoseModelList";
import { OurServicesList } from "./OurServicesList/OurServicesList";
import { OurServicesItem } from "./OurServicesItem/OurServicesItem";
import { DisassembleBanners } from "./DisassembleBanners/DisassembleBanners";
import { BuySparePartsOnlineBanner } from "./BuySparePartsOnlineBanner/BuySparePartsOnlineBanner";
import { InfoBanner } from "./InfoBanner/InfoBanner";
import { ReviewsList } from "./ReviewsList/ReviewsList";
import { ReviewItem } from "./ReviewItem/ReviewItem";
import { DocumentForm } from "./DocumentForm/DocumentForm";
import { Disclaimer } from "./Disclaimer/Disclaimer";
import { Footer } from "../Footer/Footer";

const Main = () => {
  const [activeAdvantage, setActiveAdvantage] = useState(0);
  const [activeHowWeWorksItem, setActiveHowWeWorksItem] = useState(1);
  const [activeChoseModeItem, setActiveChoseModeItem] = useState(0);
  const [activeOurServicesItem, setActiveOurServicesItem] = useState(0);

  const advantages = [
    {
      id: 0,
      title: "Ремонт  и консультация на месте",
      Component: <SpannerIcon isActive={activeAdvantage === 0} />,
    },
    {
      id: 1,
      title: "Нет скрытых платежей и переплат",
      Component: <PriceIcon isActive={activeAdvantage === 1} />,
    },
    {
      id: 2,
      title: "Собственный склад запчастей",
      Component: <SettingsIcon isActive={activeAdvantage === 2} />,
    },
  ];

  const howWeWorsItem = [
    {
      id: 1,
      image: (
        <img
          src={carouselItem1Image}
          alt="We clarify the problem and carry out diagnostics"
        />
      ),
      description: (
        <span>
          Уточняем проблему <br />и проводим диагностику
        </span>
      ),
    },
    {
      id: 2,
      image: (
        <img
          src={carouselItem2Image}
          alt="We agree on the price and repair time"
        />
      ),
      description: (
        <span>
          Согласовываем цену <br />и сроки ремонта
        </span>
      ),
    },
    {
      id: 3,
      image: <img src={carouselItem3Image} alt="We carry out repairs" />,
      description: "Осуществляем ремонт",
    },
    {
      id: 4,
      image: (
        <img
          src={carouselItem4Image}
          alt="We give the device
with new parts"
        />
      ),
      description: (
        <span>
          Отдаем устройство <br />с ноыми деталями
        </span>
      ),
    },
  ];

  const choseModelItems = Array.from({ length: 12 }).map((_, index) => ({
    id: index,
    image: <img src={XiaomiPhoneImg} alt="Xiaomi phone" />,
    model: `20 Pro 8/256Gb Phantom Blue`,
  }));

  const OurServicesListData = Array.from({ length: 10 }).map((_, index) => ({
    id: index,
    title:
      index === 0 ? "Замена light сенсора на телефоне" : "Замена light сенсора",
    period: "1-3 дня",
    price: "1 000 - 3 000 ₽",
  }));

  const reviewsData = [
    {
      id: 0,
      name: "Владимир",
      text: "Чинят не только мобильную технику, что очень порадовало! Перепаяли порт на midi-контроллере, все качественно и быстро! Очень выручили :)",
    },
    {
      id: 1,
      name: "Константин",
      text: "Сломалось гнездо зарядки у планшета. В других мастерских просили несколько тысяч за полную замену детали, а местный мастер смог перепаять и теперь все работает.",
    },
    {
      id: 2,
      name: "Артём",
      text: "Узнал что почти все сервисы покупают тут запчасти для ремонта и решил обратиться напрямую за запчастью и ремонтом. Вышло ДЕШЕВО!!",
    },
  ];

  return (
    <div className={styles["wrapper"]}>
      <Banner />
      <Advantages>
        {advantages.map((advantage) => (
          <Advantage
            key={advantage.id}
            modelTitle={advantage.title}
            isActive={activeAdvantage === advantage.id}
            onClick={() => setActiveAdvantage(advantage.id)}
          >
            {advantage.Component}
          </Advantage>
        ))}
      </Advantages>
      <HowWeWorks>
        {howWeWorsItem.map((item) => (
          <HowWeWorksCarouselItem
            key={item.id}
            image={item.image}
            description={item.description}
            number={item.id}
            isActive={activeHowWeWorksItem === item.id}
            onClick={() => setActiveHowWeWorksItem(item.id)}
          />
        ))}
      </HowWeWorks>
      <ChoseModelList showMore={() => console.log("show more")}>
        {choseModelItems.map((item) => (
          <ChoseModeItem
            key={item.id}
            model={item.model}
            image={item.image}
            isActive={activeChoseModeItem === item.id}
            onClick={() => setActiveChoseModeItem(item.id)}
          />
        ))}
      </ChoseModelList>
      <OurServicesList>
        {OurServicesListData.map((item) => (
          <OurServicesItem
            key={item.id}
            service={item.title}
            period={item.period}
            price={item.price}
            isActive={activeOurServicesItem === item.id}
            onClick={() => setActiveOurServicesItem(item.id)}
          />
        ))}
      </OurServicesList>
      <DisassembleBanners />
      <BuySparePartsOnlineBanner />
      <InfoBanner repairPhonesNumber={1500} />
      {/* <PickUpBrokenPhone /> */}
      <DocumentForm
        title="Заберем ваш сломанный смартфон прямо из дома"
        description={
          <>
            Оставьте Ваш номер телефона и мы перезвоним Вам
            <strong> прямо сейчас</strong>
          </>
        }
      />
      <ReviewsList>
        {reviewsData.map((item) => (
          <ReviewItem key={item.id} name={item.name} text={item.text} />
        ))}
      </ReviewsList>
      <DocumentForm
        title="Нужна консультация?"
        description="Оставьте Ваш номер телефона и запишем вас на бесплатную консультацию."
      />
      <Disclaimer />
      <Footer />
    </div>
  );
};

export { Main };
