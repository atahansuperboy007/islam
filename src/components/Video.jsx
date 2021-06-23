import "../video.css";
import videobg from "../video-images/video.mp4";

function Video() {
  return (
    <div className="video">
      <div className="video-inner">
        <div
          data-aos-duration="1500"
          data-aos="zoom-in-down"
          className="video-info"
        >
          <h1>Вы молодец!</h1>
          <p>
            Теперь вы знаете самые базовые знания в сфере астрологии и можете
            похвастаться ими перед своими друзьями. Перед тем как придти на
            другие разделы моего сайта прошу посмотреть небольшое
            видео-представление, чтобы понять насколько прекрасна наша
            Вселенная.
          </p>
        </div>
        <div
          data-aos-duration="1500"
          data-aos="zoom-in-up"
          className="video-video"
        >
          <video
            src={videobg}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            controls="none"
          ></video>
        </div>
      </div>
    </div>
  );
}

export default Video;
