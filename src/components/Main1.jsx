import "../main-1.css";
import main1rocket from "../main-1-images/main-1-rocket.png";

function Main1() {
  return (
    <div className="main-1">
      <div className="main-1-inner">
        <div
          data-aos="fade-right"
          data-aos-duration="3000"
          className="main-1-rocket-image"
        >
          <img src={main1rocket} alt="" />
        </div>
        <div
          data-aos-duration="3000"
          data-aos="fade-left"
          className="main-1-info"
        >
          <h1>Добро пожаловать!</h1>
          <p>
            На этом сайте вы узнаете очень много о нашей Вселенной. Вы изучите
            то что никогда не видели и поймете то что никогда не понимали.
            Узнаете много всего о планетах и галактиках находящиеся в тысячах
            световых лет от нас. Давайте перейдем к самым базовым знаниям в
            Астрологии.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main1;
