import "../main-3.css";
import main3quasar from "../main-3-images/main-3-quasar.jpg";

function Main3() {
  return (
    <div className="main-3">
      <div className="main-3-inner">
        <div
          data-aos-duration="3000"
          data-aos="fade-down"
          className="main-3-image"
        >
          <a href="https://ru.wikipedia.org/wiki/Квазар">
            <img src={main3quasar} alt="Читать в Википедии" />
          </a>
        </div>
        <div
          data-aos-duration="3000"
          data-aos="fade-up"
          className="main-3-info"
        >
          <h1>Квазар</h1>
          <p>
            Квазар — класс астрономических объектов, являющихся одними из самых
            ярких в видимой Вселенной. Английский термин quasar образован от
            слов <i>quasi-stellar</i> и <i>radiosource</i> и дословно означает
            «похожий на звезду радиоисточник».
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main3;
