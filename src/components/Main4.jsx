import main4pulsar from "../main-4-images/main-4-pulsar.jpg";
import "../main-4.css";


function Main4() {
  return (
    <div className="main-4">
      <div className="main-4-inner">
        <div
          data-aos-duration="3000"
          data-aos="fade-left"
          className="main-4-info"
        >
          <h1>Пульсар</h1>
          <p>
            Пульсар — космический источник гамма излучений, приходящих на Землю
            в виде периодических всплесков импульсов. Согласно доминирующей
            астрофизической модели, пульсары представляют собой вращающиеся
            нейтронные звёзды с магнитным полем, которое наклонено к оси
            вращения, что вызывает модуляцию приходящего на Землю излучения.
          </p>
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="3000"
          className="main-4-image"
        >
          <a href="https://ru.wikipedia.org/wiki/Пульсар#:~:text=Пульса́р%20—%20космический%20источник%20радио-%20(,виде%20периодических%20всплесков%20(импульсов).">
            <img src={main4pulsar} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Main4;
