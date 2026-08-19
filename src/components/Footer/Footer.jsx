import React from "react";
import { FaInstagram, FaFacebookF, FaPinterestP } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      {/* =========================
          MAIN FOOTER
      ========================= */}
      <div className="footer-main">
        {/* BRAND */}
        <div className="footer-brand">
          <a href="/" className="footer-logo">
            ORGANIC<span>.</span>
          </a>

          <p className="footer-description">
            Thoughtfully grown, carefully crafted,
            <br />
            and made for your everyday ritual.
          </p>

          <div className="footer-socials">
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>

            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>

            <a href="#" aria-label="Pinterest">
              <FaPinterestP />
            </a>
          </div>
        </div>

        {/* SHOP */}
        <div className="footer-column">
          <h4>SHOP</h4>

          <a href="#">Ceremonial Verdea</a>
          <a href="#">Daily Verdea</a>
          <a href="#">Verdea Sets</a>
          <a href="#">Accessories</a>
        </div>

        {/* EXPLORE */}
        <div className="footer-column">
          <h4>EXPLORE</h4>

          <a href="#">Our Story</a>
          <a href="#">Farm to Cup</a>
          <a href="#">Journal</a>
          <a href="#">Contact</a>
        </div>

        {/* INFORMATION */}
        <div className="footer-column">
          <h4>INFORMATION</h4>

          <a href="#">FAQ</a>
          <a href="#">Shipping & Returns</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>

        {/* NEWSLETTER */}
        <div className="footer-newsletter">
          <span className="footer-small-label">STAY IN THE LOOP</span>

          <h3>
            A little verdea
            <br />
            in your inbox.
          </h3>

          <p>
            Receive new arrivals, verdea rituals
            <br />
            and occasional good things.
          </p>

          <form className="footer-form">
            <input
              type="email"
              placeholder="Your email address"
              aria-label="Email address"
            />

            <button type="submit" aria-label="Subscribe">
              <FiArrowUpRight />
            </button>
          </form>
        </div>
      </div>

      {/* =========================
          BOTTOM FOOTER
      ========================= */}
      <div className="footer-bottom">
        <p>© 2026 VERDEA. ALL RIGHTS RESERVED.</p>

        <div className="footer-bottom-links">
          <a href="#">Privacy</a>
          <span>·</span>
          <a href="#">Terms</a>
        </div>

        <p className="footer-made">MADE WITH CARE</p>
      </div>
    </footer>
  );
};

export default Footer;
