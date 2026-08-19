import React, { useState } from "react";
import { FiMail, FiArrowRight, FiCheck } from "react-icons/fi";
import "./StayInLoop.css";

const StayInLoop = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | success | error
  const [message, setMessage] = useState("");

  const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleChange = (e) => {
    setEmail(e.target.value);
    if (status !== "idle") {
      setStatus("idle");
      setMessage("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setStatus("error");
      setMessage("Please enter your email address.");
      return;
    }

    if (!isValidEmail(email)) {
      setStatus("error");
      setMessage("That email doesn't look right — check and try again.");
      return;
    }

    // TODO: yahan apna real subscribe API call laga dena
    setStatus("success");
    setMessage("You're in! Check your inbox to confirm.");
    setEmail("");
  };

  return (
    <section className="stay-loop-section">
      <div className="stay-loop-content">
        <span className="stay-loop-eyebrow">Stay Connected</span>

        <h2>Stay in the Loop</h2>

        <p>
          Get the latest matcha stories, recipes, and inspiration delivered
          straight to your inbox.
        </p>

        <form
          className={`stay-loop-actions${status === "error" ? " has-error" : ""}`}
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="stay-loop-input-wrap">
            <FiMail className="stay-loop-input-icon" aria-hidden="true" />
            <input
              type="email"
              className="stay-loop-input"
              placeholder="Enter your email"
              value={email}
              onChange={handleChange}
              aria-label="Email address"
            />
          </div>

          <button type="submit" className="stay-loop-button">
            <span>Subscribe</span>
            <FiArrowRight
              className="stay-loop-button-icon"
              aria-hidden="true"
            />
          </button>
        </form>

        <p
          className={`stay-loop-status stay-loop-status--${status}`}
          role="status"
          aria-live="polite"
        >
          {status === "success" && (
            <FiCheck className="stay-loop-status-icon" aria-hidden="true" />
          )}
          {message}
        </p>
      </div>
    </section>
  );
};

export default StayInLoop;
