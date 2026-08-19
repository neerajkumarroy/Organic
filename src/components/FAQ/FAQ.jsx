import React, { useState } from "react";
import { FiPlus, FiMinus, FiArrowUpRight, FiCheck } from "react-icons/fi";
import "./FAQ.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "What makes your matcha different?",
      answer:
        "Our matcha is carefully sourced from Uji, Japan and crafted with a focus on purity, freshness, vibrant color and a naturally smooth taste.",
    },
    {
      question: "How do I prepare the perfect cup?",
      answer:
        "Add one teaspoon of matcha to a small amount of warm water and whisk until smooth and frothy. Add more water or your favorite milk to create your perfect cup.",
    },
    {
      question: "How should I store my matcha?",
      answer:
        "Keep your matcha sealed in an airtight container and store it somewhere cool, dry and away from direct sunlight to preserve its freshness and vibrant character.",
    },
    {
      question: "Can I use matcha in recipes?",
      answer:
        "Absolutely. Matcha works beautifully in lattes, smoothies, desserts, breakfast recipes and many everyday creations.",
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="faq-section">
      {/* BACKGROUND DECORATION */}
      <div className="faq-bg-orb faq-orb-one" aria-hidden="true"></div>
      <div className="faq-bg-orb faq-orb-two" aria-hidden="true"></div>
      <div className="faq-bg-grid" aria-hidden="true"></div>

      <div className="faq-container">
        {/* ================= TOP ================= */}
        <div className="faq-header">
          <div className="faq-title-area">
            <div className="faq-mini-label">
              <span className="faq-label-line" aria-hidden="true"></span>
              GOOD TO KNOW
            </div>

            <h2>
              Everything
              <br />
              <span>you need to know.</span>
            </h2>
          </div>

          <div className="faq-header-right">
            <a
              href="#contact"
              className="faq-header-circle"
              aria-label="Have more questions? Get in touch"
            >
              <FiArrowUpRight aria-hidden="true" />
            </a>

            <p>
              A few simple answers about our matcha, preparation and the ritual
              behind every cup.
            </p>
          </div>
        </div>

        {/* ================= FAQ ================= */}
        <div className="faq-wrapper">
          <div className="faq-top-line">
            <span>FAQ</span>
            <span>{faqs.length} QUESTIONS</span>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => {
              const isActive = activeIndex === index;
              const questionId = `faq-question-${index}`;
              const answerId = `faq-answer-${index}`;

              return (
                <article
                  className={`faq-card ${isActive ? "faq-card-active" : ""}`}
                  key={index}
                >
                  {/* QUESTION */}
                  <button
                    type="button"
                    id={questionId}
                    className="faq-question"
                    onClick={() => handleToggle(index)}
                    aria-expanded={isActive}
                    aria-controls={answerId}
                  >
                    <div className="faq-number">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="faq-question-content">
                      <span className="faq-question-label">
                        QUESTION {String(index + 1).padStart(2, "0")}
                      </span>

                      <h3>{faq.question}</h3>
                    </div>

                    <div className="faq-toggle">
                      {isActive ? (
                        <FiMinus aria-hidden="true" />
                      ) : (
                        <FiPlus aria-hidden="true" />
                      )}
                    </div>
                  </button>

                  {/* ANSWER */}
                  <div
                    id={answerId}
                    role="region"
                    aria-labelledby={questionId}
                    className="faq-answer-container"
                    style={{
                      gridTemplateRows: isActive ? "1fr" : "0fr",
                    }}
                  >
                    <div className="faq-answer-inner">
                      <div className="faq-answer-content">
                        <div className="faq-answer-check">
                          <FiCheck aria-hidden="true" />
                        </div>

                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* ================= BOTTOM ================= */}
        <div className="faq-bottom">
          <span>CRAFTED WITH CARE · MADE FOR YOUR DAILY RITUAL</span>

          <a href="#contact">
            HAVE MORE QUESTIONS
            <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
