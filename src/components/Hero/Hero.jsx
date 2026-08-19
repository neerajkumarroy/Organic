import "./Hero.css";
import { FiArrowDown } from "react-icons/fi";

function Hero() {
  const handleScrollDown = () => {
    const footer = document.getElementById("footer");

    if (footer) {
      footer.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="hero" id="home">
      {/* Single Hero Background Image */}
      <div className="hero__background"></div>

      <div className="hero__content">
        {/* Left Content */}
        <div className="hero__text">
          <p className="hero__eyebrow">
            PURE <span>•</span> NATURAL <span>•</span> AUTHENTIC
          </p>

          <h1 className="hero__title">MATCHA</h1>

          <p className="hero__script">for real life</p>

          <p className="hero__description">
            Experience the perfect balance of
            <br />
            calm and focus with our handcrafted
            <br />
            Verdea drinks.
          </p>

          <a href="#menu" className="hero__button">
            <span>EXPLORE MENU</span>

            <span className="hero__button-arrow">
              <FiArrowDown />
            </span>
          </a>
        </div>

        {/* Organic Badge */}
        <div className="hero__organic">
          <span className="hero__organic-top">100%</span>

          <span className="hero__organic-icon">❧</span>

          <span className="hero__organic-text">ORGANIC</span>

          <span className="hero__organic-bottom">100%</span>
        </div>

        {/* Working Scroll Indicator */}
        <button
          type="button"
          className="hero__scroll"
          onClick={handleScrollDown}
          aria-label="Scroll down to footer"
        >
          <span className="hero__scroll-icon">
            <FiArrowDown />
          </span>

          <span className="hero__scroll-text">Scroll Down</span>
        </button>
      </div>
    </section>
  );
}

export default Hero;
