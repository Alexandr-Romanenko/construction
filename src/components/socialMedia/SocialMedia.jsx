import "./socialMedia.css";
import fbIcon from "../../img/icons/sosial/fb2/fb.svg";
import inIcon from "../../img/icons/sosial/in/in.svg";
import skypeIcon from "../../img/icons/sosial/skype/skype.svg";
import twitterIcon from "../../img/icons/sosial/twitter/twitter.svg";

export default function SocialMedia() {
  return (
    <ul className="social-media">
      <li className="social-media__item">
        <a href="https://www.facebook.com/" target="_blank">
          <img src={fbIcon} />
        </a>
      </li>
      <li className="social-media__item">
        <a href="https://www.linkedin.com/" target="_blank">
          <img src={inIcon} />
        </a>
      </li>
      <li className="social-media__item">
        <a href="https://www.skype.com/" target="_blank">
          <img src={skypeIcon} />
        </a>
      </li>
      <li className="social-media__item">
        <a href="https://x.com/" target="_blank">
          <img src={twitterIcon} />
        </a>
      </li>
    </ul>
  );
}
