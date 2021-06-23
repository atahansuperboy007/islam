import "../main-2.css";
import main2sun from "../main-2-images/main-2-sun.png";

function Main2() {
  return (
    <div className="main-2">
      <div className="main-2-inner">
        <div
          data-aos-duration="3000"
          data-aos="fade-up"
          className="main-2-info"
        >
          <h1>Световая скорость</h1>
          <p>
            На данный момент считают, что скорость света в вакууме —
            фундаментальная физическая постоянная, по определению, точно равная     
            <i>300 000 000 м/с</i> , или <i>1 000 000 000 км/ч</i>. Очень
            быстро. Да?
          </p>
        </div>
        <div
          data-aos-duration="3000"
          data-aos="fade-down"
          className="main-2-image"
        >
          <a href="https://ru.wikipedia.org/wiki/Скорость_света#:~:text=На%20данный%20момент%20считают%2C%20что,848%2C8%20км%2Fч.">
            <img src={main2sun} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Main2;
