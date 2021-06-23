import "../footer.css";
import footerlogo from "../nav-images/nav-logo.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-inner">
        <div className="footer-logo">
          <img src={footerlogo} alt="" />
        </div>
        <div  className="footer-info">
          <a
            className="youtube"
            href="https://www.youtube.com/channel/UCHCaTHR9v30FiMtV_6a6SvQ"
          >
            Youtube
          </a>
          <a className="discord" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            Discord
          </a>
          <a className="instagram" href="https://www.instagram.com/islambagirovvv/">
            Instagram
          </a>
          <a
            className="tiktok"
            href="https://www.tiktok.com/@altenzo_?lang=ru-RU&is_copy_url=1&is_from_webapp=v1"
          >
            TikTok
          </a>
          <a
            className="whatsapp"
            href="https://api.whatsapp.com/send/?phone=%2B77015656569&text&app_absent=0"
          >
            WhatSapp
          </a>
          <a className="vk" href="https://vk.com/islam_bagirov_official">
            VKontakte
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
