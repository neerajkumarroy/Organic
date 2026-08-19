import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState(null);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleHelp = () => {
    setHelpOpen((prev) => !prev);
    setActiveQuestion(null);
  };

  const handleQuestion = (question) => {
    setActiveQuestion(question);
  };

  const handleContact = () => {
    window.location.href =
      "mailto:hello@organic.com?subject=Organic%20Tea%20Help";
  };

  const helpAnswers = {
    shipping:
      "We carefully pack every order and dispatch it within 1–2 business days. Delivery time depends on your location.",

    menu: "Explore our Menu section to discover our organic matcha, premium teas and seasonal selections.",

    order:
      "For order-related questions, please contact our support team with your order number and we will help you quickly.",

    contact:
      "Our support team is happy to help. Send us an email and we will get back to you as soon as possible.",
  };

  return (
    <header className={`navbar ${menuOpen ? "navbar--open" : ""}`}>
      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <div className="navbar__inner">
        {/* Logo */}
        <a href="/" className="navbar__logo" onClick={closeMenu}>
          <span className="navbar__logo-icon">✦</span>

          <span className="navbar__logo-text">ORGANIC</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="navbar__links">
          <a href="#home">Home</a>

          <a href="#mission">Our Mission</a>

          <a href="#menu">Menu</a>

          <a href="#shop">Shop</a>

          <a href="#about">About Us</a>
          <a href="/login">Login</a>
        </nav>

        {/* Right Actions */}
        <div className="navbar__actions">
          {/* Search */}
          <button
            className="navbar__icon-btn"
            aria-label="Search"
            type="button"
          >
            <svg
              width="19"
              height="19"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
            >
              <circle cx="11" cy="11" r="6.5" />

              <path d="m16 16 4 4" />
            </svg>
          </button>

          {/* Shopping Bag */}
          <button
            className="navbar__icon-btn"
            aria-label="Shopping bag"
            type="button"
          >
            <svg
              width="19"
              height="19"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <path d="M6 8h12l1 13H5L6 8Z" />

              <path d="M9 9V6a3 3 0 0 1 6 0v3" />
            </svg>
          </button>

          {/* Mobile Menu */}
          <button
            className="navbar__menu-btn"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* =====================================================
          MOBILE NAVIGATION
      ===================================================== */}

      <nav className={`navbar__mobile-menu ${menuOpen ? "is-open" : ""}`}>
        <div className="navbar__mobile-links">
          <a href="#home" onClick={closeMenu}>
            <span>01</span>
            Home
          </a>

          <a href="#mission" onClick={closeMenu}>
            <span>02</span>
            Our Mission
          </a>

          <a href="#menu" onClick={closeMenu}>
            <span>03</span>
            Menu
          </a>

          <a href="#shop" onClick={closeMenu}>
            <span>04</span>
            Shop
          </a>

          <a href="#about" onClick={closeMenu}>
            <span>05</span>
            About Us
          </a>
          <a href="/login" onClick={closeMenu}>
            <span>05</span>
            Login
          </a>
        </div>

        <div className="navbar__mobile-footer">
          <span>PURE</span>
          <span>•</span>
          <span>NATURAL</span>
          <span>•</span>
          <span>AUTHENTIC</span>
        </div>
      </nav>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="navbar__overlay"
          onClick={closeMenu}
          aria-hidden="true"
        ></div>
      )}

      {/* =====================================================
          HELP SYSTEM
      ===================================================== */}

      <div className={`help-system ${helpOpen ? "help-system--open" : ""}`}>
        {/* Help Panel */}

        <div className="help-panel">
          {/* Header */}

          <div className="help-panel__header">
            <div>
              <span className="help-panel__eyebrow">ORGANIC SUPPORT</span>

              <h3>How can we help?</h3>
            </div>

            <button
              className="help-panel__close"
              onClick={toggleHelp}
              aria-label="Close help"
              type="button"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <path d="M6 6l12 12" />

                <path d="M18 6L6 18" />
              </svg>
            </button>
          </div>

          {/* Main Help Content */}

          {!activeQuestion ? (
            <>
              <p className="help-panel__intro">
                Find quick answers or get in touch with our team.
              </p>

              <div className="help-options">
                <button
                  type="button"
                  onClick={() => handleQuestion("shipping")}
                >
                  <span className="help-option__icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M3 6h11v11H3z" />

                      <path d="M14 10h4l3 3v4h-7z" />

                      <circle cx="7" cy="19" r="2" />

                      <circle cx="18" cy="19" r="2" />
                    </svg>
                  </span>

                  <span className="help-option__content">
                    <strong>Shipping & Delivery</strong>

                    <small>Delivery information</small>
                  </span>

                  <span className="help-option__arrow">→</span>
                </button>

                <button type="button" onClick={() => handleQuestion("menu")}>
                  <span className="help-option__icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M5 4h14" />

                      <path d="M7 4v4" />

                      <path d="M17 4v4" />

                      <path d="M6 8h12v11H6z" />

                      <path d="M9 12h6" />

                      <path d="M9 15h4" />
                    </svg>
                  </span>

                  <span className="help-option__content">
                    <strong>Our Menu</strong>

                    <small>Explore our products</small>
                  </span>

                  <span className="help-option__arrow">→</span>
                </button>

                <button type="button" onClick={() => handleQuestion("order")}>
                  <span className="help-option__icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M6 7h12l1 13H5L6 7Z" />

                      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
                    </svg>
                  </span>

                  <span className="help-option__content">
                    <strong>My Order</strong>

                    <small>Order related help</small>
                  </span>

                  <span className="help-option__arrow">→</span>
                </button>

                <button type="button" onClick={() => handleQuestion("contact")}>
                  <span className="help-option__icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M4 5h16v12H8l-4 3V5Z" />

                      <path d="M8 9h8" />

                      <path d="M8 12h5" />
                    </svg>
                  </span>

                  <span className="help-option__content">
                    <strong>Contact Support</strong>

                    <small>Talk with our team</small>
                  </span>

                  <span className="help-option__arrow">→</span>
                </button>
              </div>

              <button
                className="help-panel__email"
                onClick={handleContact}
                type="button"
              >
                <span>Need more help?</span>

                <strong>Email our team →</strong>
              </button>
            </>
          ) : (
            /* =================================================
               ANSWER VIEW
            ================================================= */

            <div className="help-answer">
              <button
                className="help-answer__back"
                type="button"
                onClick={() => setActiveQuestion(null)}
              >
                ← Back to help
              </button>

              <div className="help-answer__icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H8l-4 3v-5.2A7.5 7.5 0 1 1 20 11.5Z" />

                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>

              <h4>
                {activeQuestion === "shipping" && "Shipping & Delivery"}

                {activeQuestion === "menu" && "Our Menu"}

                {activeQuestion === "order" && "My Order"}

                {activeQuestion === "contact" && "Contact Support"}
              </h4>

              <p>{helpAnswers[activeQuestion]}</p>

              <button
                className="help-answer__contact"
                type="button"
                onClick={handleContact}
              >
                Contact our team
                <span>→</span>
              </button>
            </div>
          )}

          {/* Footer */}

          <div className="help-panel__footer">
            <span className="help-status"></span>

            <span>Usually replies within 24 hours</span>
          </div>
        </div>

        {/* =================================================
            FLOATING HELP BUTTON
        ================================================= */}

        <button
          className="navbar__help"
          onClick={toggleHelp}
          aria-label={helpOpen ? "Close help" : "Open help"}
          aria-expanded={helpOpen}
          type="button"
        >
          <span className="navbar__help-icon">
            {helpOpen ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <path d="M6 6l12 12" />

                <path d="M18 6L6 18" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <circle cx="12" cy="12" r="9" />

                <path d="M9.7 9a2.5 2.5 0 1 1 4.5 1.5c-.7.9-2.2 1.1-2.2 2.5" />

                <path d="M12 16.5h.01" />
              </svg>
            )}
          </span>

          <span className="navbar__help-text">
            {helpOpen ? "CLOSE" : "HELP"}
          </span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
