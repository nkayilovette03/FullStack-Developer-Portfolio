import { useState } from "react";

const SocialLinks = () => {
  const [activeTheme, setActiveTheme] = useState(document.body.dataset.theme);
  return (
    <>
      <div className="social-links">
        <a
          href="https://instagram.com/thedev.init"
          target="_blank"
          className="instagram"
        >
          <i className="icofont-instagram"></i>
        </a>
        <a
          href="https://facebook.com/chris.chacodaar"
          target="_blank"
          className="facebook"
        >
          <i className="icofont-facebook"></i>
        </a>
        <a
          href="https://github.com/nkayilovette03"
          target="_blank"
          className="github"
        >
          <i class="icofont-github"></i>
        </a>
        <a
          href="https://twitter.com/@chacodaar"
          target="_blank"
          className="twitter"
        >
          <i className="icofont-twitter"></i>
        </a>
        <a
          href="https://open.spotify.com/user/zvjq73c6I01e2m0qeg7Ifgohn?si=S9ZbLYK2RcGj3Pp3gAeiiA"
          target="_blank"
          className="google-plus"
        >
          <i className="icofont-spotify"></i>
        </a>
        <a
          href="https://linkedin.com/in/nkayi-lovette-8ab976205"
          target="_blank"
          className="linkedin"
        >
          <i className="icofont-linkedin"></i>
        </a>
      </div>
    </>
  );
};

export default SocialLinks;
