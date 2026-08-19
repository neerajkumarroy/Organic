import React, { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Eye,
  EyeOff,
  Leaf,
  Sparkles,
} from "lucide-react";
import "./Login.css";

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);

  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showSignupPassword, setShowSignupPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [focused, setFocused] = useState("");

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  /* =====================================================
     EMAIL VALIDATION
  ===================================================== */

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
  };

  const getEmailStatus = (email) => {
    if (!email) return "empty";
    return isValidEmail(email) ? "valid" : "invalid";
  };

  /* =====================================================
     PASSWORD VALIDATION
  ===================================================== */

  const getPasswordStatus = (password) => {
    if (!password) return "empty";
    if (password.length >= 8) return "valid";
    return "invalid";
  };

  /* =====================================================
     LOGIN CHANGE
  ===================================================== */

  const handleLoginChange = (e) => {
    const { name, value, checked, type } = e.target;

    setLoginData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  /* =====================================================
     SIGNUP CHANGE
  ===================================================== */

  const handleSignupChange = (e) => {
    const { name, value, checked, type } = e.target;

    setSignupData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  /* =====================================================
     LOGIN SUBMIT
  ===================================================== */

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    if (!isValidEmail(loginData.email)) {
      return;
    }

    if (loginData.password.length < 8) {
      return;
    }

    console.log("Login Data:", loginData);
  };

  /* =====================================================
     SIGNUP SUBMIT
  ===================================================== */

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    if (!isValidEmail(signupData.email)) {
      return;
    }

    if (signupData.password.length < 8) {
      return;
    }

    if (signupData.password !== signupData.confirmPassword) {
      return;
    }

    if (!signupData.terms) {
      return;
    }

    console.log("Signup Data:", signupData);
  };

  /* =====================================================
     SWITCH
  ===================================================== */

  const openSignup = () => {
    setFocused("");
    setIsSignup(true);
  };

  const openLogin = () => {
    setFocused("");
    setIsSignup(false);
  };

  const loginEmailStatus = getEmailStatus(loginData.email);
  const signupEmailStatus = getEmailStatus(signupData.email);
  const loginPasswordStatus = getPasswordStatus(loginData.password);
  const signupPasswordStatus = getPasswordStatus(signupData.password);

  return (
    <section className={`matcha-login ${isSignup ? "signup-mode" : ""}`}>
      {/* =================================================
          BACK TO WEBSITE
      ================================================= */}

      <a href="/" className="back-to-website">
        <ArrowLeft size={15} />
        <span>BACK TO WEBSITE</span>
      </a>

      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div className="login-noise" />

      <div className="login-glow login-glow-one" />
      <div className="login-glow login-glow-two" />

      <div className="login-orbit login-orbit-one" />
      <div className="login-orbit login-orbit-two" />

      <div className="login-leaf login-leaf-one">
        <Leaf />
      </div>

      <div className="login-floating-particle particle-1" />
      <div className="login-floating-particle particle-2" />
      <div className="login-floating-particle particle-3" />
      <div className="login-floating-particle particle-4" />

      {/* =================================================
          MAIN
      ================================================= */}

      <div className="login-wrapper">
        {/* =================================================
            EDITORIAL
        ================================================= */}

        <div className="login-editorial">
          <div className="login-top-label">
            <span />
            PURE MATCHA EXPERIENCE
            <span />
          </div>

          <div className="login-main-copy">
            <div className="login-small-mark">
              <Sparkles size={14} />
              <span>{isSignup ? "BEGIN YOUR JOURNEY" : "WELCOME BACK"}</span>
            </div>

            <h1>
              {isSignup ? (
                <>
                  Start the
                  <br />
                  <em>ritual.</em>
                </>
              ) : (
                <>
                  Enter the
                  <br />
                  <em>ritual.</em>
                </>
              )}
            </h1>

            <p>
              {isSignup
                ? "Create your private space for mindful moments, honest ingredients and the pure character of ceremonial matcha."
                : "A quiet space for mindful moments, honest ingredients and the pure character of ceremonial matcha."}
            </p>

            <div className="login-editorial-line">
              <span />
              <small>
                {isSignup
                  ? "YOUR RITUAL STARTS HERE"
                  : "CRAFTED WITH INTENTION"}
              </small>
            </div>
          </div>

          <div className="login-edition">
            <div className="edition-number">
              <strong>{isSignup ? "02" : "01"}</strong>
              <span>/</span>
              <small>{isSignup ? "CREATE" : "MEMBERS"}</small>
            </div>

            <div className="edition-note">
              SLOW DOWN.
              <br />
              SIP BETTER.
            </div>
          </div>
        </div>

        {/* =================================================
            CARD
        ================================================= */}

        <div className="login-panel-area">
          <div className={`login-card ${isSignup ? "login-card-flipped" : ""}`}>
            {/* =================================================
                LOGIN
            ================================================= */}

            <div className="login-card-face login-card-front">
              <div className="login-panel-header">
                <div className="login-logo-mark">
                  <Leaf size={18} />
                </div>

                <div>
                  <span className="login-panel-kicker">MEMBERS AREA</span>

                  <h2>Welcome back.</h2>
                </div>
              </div>

              <div className="login-panel-intro">
                Continue your journey with us.
              </div>

              <form className="login-form" onSubmit={handleLoginSubmit}>
                {/* EMAIL */}

                <div
                  className={`login-field ${
                    focused === "login-email" ? "is-focused" : ""
                  }`}
                >
                  <label htmlFor="login-email">EMAIL ADDRESS</label>

                  <div className="input-status-wrap">
                    <span className={`input-status ${loginEmailStatus}`} />

                    <input
                      id="login-email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      autoComplete="email"
                      value={loginData.email}
                      onChange={handleLoginChange}
                      onFocus={() => setFocused("login-email")}
                      onBlur={() => setFocused("")}
                      required
                    />
                  </div>

                  <span className="field-line" />

                  {loginEmailStatus === "invalid" && (
                    <small className="field-error">
                      Please enter a valid email address.
                    </small>
                  )}

                  {loginEmailStatus === "valid" && (
                    <small className="field-success">
                      Email address looks good.
                    </small>
                  )}
                </div>

                {/* PASSWORD */}

                <div
                  className={`login-field ${
                    focused === "login-password" ? "is-focused" : ""
                  }`}
                >
                  <label htmlFor="login-password">PASSWORD</label>

                  <div className="password-wrap">
                    <span
                      className={`input-status password-status ${loginPasswordStatus}`}
                    />

                    <input
                      id="login-password"
                      name="password"
                      type={showLoginPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      autoComplete="current-password"
                      value={loginData.password}
                      onChange={handleLoginChange}
                      onFocus={() => setFocused("login-password")}
                      onBlur={() => setFocused("")}
                      required
                    />

                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => setShowLoginPassword(!showLoginPassword)}
                      aria-label={
                        showLoginPassword ? "Hide password" : "Show password"
                      }
                    >
                      {showLoginPassword ? (
                        <EyeOff size={16} />
                      ) : (
                        <Eye size={16} />
                      )}
                    </button>
                  </div>

                  <span className="field-line" />

                  {loginPasswordStatus === "invalid" && (
                    <small className="field-error">
                      Password must contain at least 8 characters.
                    </small>
                  )}
                </div>

                {/* OPTIONS */}

                <div className="login-options">
                  <label className="remember-me">
                    <input
                      type="checkbox"
                      name="remember"
                      checked={loginData.remember}
                      onChange={handleLoginChange}
                    />

                    <span className="custom-check">
                      <Check size={11} />
                    </span>

                    <span>Remember me</span>
                  </label>

                  <button type="button" className="forgot-password">
                    Forgot password?
                  </button>
                </div>

                {/* SUBMIT */}

                <button type="submit" className="login-submit">
                  <span>ENTER MY ACCOUNT</span>

                  <span className="login-submit-icon">
                    <ArrowUpRight size={17} />
                  </span>

                  <span className="button-shine" />
                </button>
              </form>

              {/* DIVIDER */}

              <div className="login-divider">
                <span />
                <small>OR</small>
                <span />
              </div>

              {/* REGISTER */}

              <div className="login-register">
                <p>New to the ritual?</p>

                <button type="button" onClick={openSignup}>
                  Create an account
                  <ArrowRight size={14} />
                </button>
              </div>

              <div className="login-panel-footer">
                <span>
                  <i />
                  SECURE MEMBER ACCESS
                </span>

                <span>100% ORGANIC</span>
              </div>

              <div className="login-panel-number">01</div>
            </div>

            {/* =================================================
                SIGNUP
            ================================================= */}

            <div className="login-card-face login-card-back">
              <div className="signup-glow signup-glow-one" />
              <div className="signup-glow signup-glow-two" />

              <div className="signup-particle signup-particle-1" />
              <div className="signup-particle signup-particle-2" />
              <div className="signup-particle signup-particle-3" />

              <div className="signup-header">
                <div className="signup-logo-orbit">
                  <div className="signup-ring ring-one" />
                  <div className="signup-ring ring-two" />

                  <div className="signup-logo">
                    <Leaf size={21} />
                  </div>
                </div>

                <div>
                  <span className="login-panel-kicker">NEW MEMBER</span>

                  <h2>Create your ritual.</h2>
                </div>
              </div>

              <div className="signup-intro">
                One account. A slower way to experience matcha.
              </div>

              <form className="signup-form" onSubmit={handleSignupSubmit}>
                {/* NAME */}

                <div
                  className={`login-field signup-field ${
                    focused === "signup-name" ? "is-focused" : ""
                  }`}
                >
                  <label htmlFor="signup-name">YOUR NAME</label>

                  <input
                    id="signup-name"
                    name="name"
                    type="text"
                    placeholder="How should we call you?"
                    autoComplete="name"
                    value={signupData.name}
                    onChange={handleSignupChange}
                    onFocus={() => setFocused("signup-name")}
                    onBlur={() => setFocused("")}
                    required
                  />

                  <span className="field-line" />
                </div>

                {/* EMAIL */}

                <div
                  className={`login-field signup-field ${
                    focused === "signup-email" ? "is-focused" : ""
                  }`}
                >
                  <label htmlFor="signup-email">EMAIL ADDRESS</label>

                  <div className="input-status-wrap">
                    <span className={`input-status ${signupEmailStatus}`} />

                    <input
                      id="signup-email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      autoComplete="email"
                      value={signupData.email}
                      onChange={handleSignupChange}
                      onFocus={() => setFocused("signup-email")}
                      onBlur={() => setFocused("")}
                      required
                    />
                  </div>

                  <span className="field-line" />

                  {signupEmailStatus === "invalid" && (
                    <small className="field-error">
                      Please enter a valid email address.
                    </small>
                  )}

                  {signupEmailStatus === "valid" && (
                    <small className="field-success">
                      Email address looks good.
                    </small>
                  )}
                </div>

                {/* PASSWORD GRID */}

                <div className="signup-password-grid">
                  <div
                    className={`login-field signup-field ${
                      focused === "signup-password" ? "is-focused" : ""
                    }`}
                  >
                    <label htmlFor="signup-password">PASSWORD</label>

                    <div className="password-wrap">
                      <span
                        className={`input-status password-status ${signupPasswordStatus}`}
                      />

                      <input
                        id="signup-password"
                        name="password"
                        type={showSignupPassword ? "text" : "password"}
                        placeholder="Create password"
                        autoComplete="new-password"
                        value={signupData.password}
                        onChange={handleSignupChange}
                        onFocus={() => setFocused("signup-password")}
                        onBlur={() => setFocused("")}
                        required
                      />

                      <button
                        type="button"
                        className="password-toggle"
                        onClick={() =>
                          setShowSignupPassword(!showSignupPassword)
                        }
                      >
                        {showSignupPassword ? (
                          <EyeOff size={14} />
                        ) : (
                          <Eye size={14} />
                        )}
                      </button>
                    </div>

                    <span className="field-line" />
                  </div>

                  {/* CONFIRM */}

                  <div
                    className={`login-field signup-field ${
                      focused === "confirm-password" ? "is-focused" : ""
                    }`}
                  >
                    <label htmlFor="confirm-password">CONFIRM</label>

                    <div className="password-wrap">
                      <input
                        id="confirm-password"
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Repeat password"
                        autoComplete="new-password"
                        value={signupData.confirmPassword}
                        onChange={handleSignupChange}
                        onFocus={() => setFocused("confirm-password")}
                        onBlur={() => setFocused("")}
                        required
                      />

                      <button
                        type="button"
                        className="password-toggle"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                      >
                        {showConfirmPassword ? (
                          <EyeOff size={14} />
                        ) : (
                          <Eye size={14} />
                        )}
                      </button>
                    </div>

                    <span className="field-line" />
                  </div>
                </div>

                {/* TERMS */}

                <label className="signup-terms">
                  <input
                    type="checkbox"
                    name="terms"
                    checked={signupData.terms}
                    onChange={handleSignupChange}
                    required
                  />

                  <span className="signup-check">
                    <Check size={11} />
                  </span>

                  <span>
                    I agree to the{" "}
                    <span className="terms-link">terms & privacy</span>
                  </span>
                </label>

                {/* CREATE */}

                <button type="submit" className="signup-submit">
                  <span>CREATE MY ACCOUNT</span>

                  <span className="signup-submit-icon">
                    <ArrowUpRight size={17} />
                  </span>

                  <span className="signup-button-shine" />
                </button>
              </form>

              {/* BACK */}

              <div className="signup-back-login">
                <span>ALREADY A MEMBER?</span>

                <button type="button" onClick={openLogin}>
                  <ArrowLeft size={13} />
                  Back to login
                </button>
              </div>

              <div className="signup-footer">
                <span>
                  <i />
                  YOUR PRIVATE MATCHA SPACE
                </span>

                <span>EST. 2026</span>
              </div>

              <div className="signup-panel-number">02</div>
            </div>
          </div>
        </div>
      </div>

      {/* PAGE FOOTER */}

      <div className="login-page-footer">
        <span>VERDA / MATCHA HOUSE</span>
        <span>EST. 2026</span>
        <span>CRAFTED FOR SLOW MOMENTS</span>
      </div>
    </section>
  );
};

export default Login;
