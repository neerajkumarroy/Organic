import { useState } from "react";
import { FiArrowLeft, FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import "./Menu.css";

import matcha1 from "../../assets/glass.png";
import matcha2 from "../../assets/drink2.png";
import matcha3 from "../../assets/test1.png";
import matcha4 from "../../assets/glass.png";
import matcha5 from "../../assets/glass.png";
import matcha6 from "../../assets/glass.png";
import matcha7 from "../../assets/glass.png";
import matcha8 from "../../assets/glass.png";
import matcha9 from "../../assets/glass.png";
import matcha10 from "../../assets/glass.png";

const menuItems = [
  {
    image: matcha1,
    category: "SIGNATURE",
    name: "Ceremonial Matcha",
    description: "Pure Japanese matcha with a soft, naturally sweet finish.",
    price: "$18",
  },
  {
    image: matcha2,
    category: "CLASSIC",
    name: "Matcha Latte",
    description: "Creamy oat milk blended with vibrant ceremonial matcha.",
    price: "$14",
  },
  {
    image: matcha3,
    category: "SEASONAL",
    name: "Yuzu Matcha",
    description: "Bright citrus notes meeting smooth stone-ground matcha.",
    price: "$16",
  },
  {
    image: matcha4,
    category: "SIGNATURE",
    name: "Matcha Cloud",
    description: "Silky matcha finished with a delicate layer of soft foam.",
    price: "$15",
  },
  {
    image: matcha5,
    category: "PREMIUM",
    name: "Uji Reserve",
    description: "Deep umami character from carefully selected Uji leaves.",
    price: "$21",
  },
  {
    image: matcha6,
    category: "HOUSE SPECIAL",
    name: "Vanilla Matcha",
    description: "Elegant vanilla balanced with earthy Japanese matcha.",
    price: "$15",
  },
  {
    image: matcha7,
    category: "SEASONAL",
    name: "Strawberry Matcha",
    description: "Fresh strawberry layered with creamy ceremonial matcha.",
    price: "$17",
  },
  {
    image: matcha8,
    category: "SIGNATURE",
    name: "Iced Matcha",
    description: "Bright, refreshing and perfectly balanced over ice.",
    price: "$13",
  },
  {
    image: matcha9,
    category: "HOUSE SPECIAL",
    name: "Coconut Matcha",
    description: "Creamy coconut milk paired with rich green tea notes.",
    price: "$16",
  },
  {
    image: matcha10,
    category: "PREMIUM",
    name: "Matcha Tonic",
    description: "Sparkling botanical freshness with vibrant matcha.",
    price: "$15",
  },
];

function MatchaMenu() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextItems = () => {
    setCurrentIndex((prev) => (prev + 3 >= menuItems.length ? 0 : prev + 3));
  };

  const previousItems = () => {
    setCurrentIndex((prev) => (prev - 3 < 0 ? 6 : prev - 3));
  };

  const visibleItems = menuItems.slice(currentIndex, currentIndex + 3);

  return (
    <section className="matcha-menu" id="menu">
      <div className="matcha-menu__container">
        {/* HEADER */}
        <div className="matcha-menu__header">
          <div className="matcha-menu__title-area">
            <div className="matcha-menu__eyebrow">
              <span></span>
              THE MATCHA COLLECTION
            </div>

            <h2>
              Find your
              <em> ritual.</em>
            </h2>
          </div>

          <div className="matcha-menu__header-right">
            <p>
              A collection of carefully crafted matcha drinks, designed around
              balance, simplicity and the Japanese art of slowing down.
            </p>

            <div className="matcha-menu__counter">
              <span>{String(currentIndex + 1).padStart(2, "0")}</span>

              <i></i>

              <span>
                {String(Math.min(currentIndex + 3, menuItems.length)).padStart(
                  2,
                  "0",
                )}
              </span>

              <small>/ 10</small>
            </div>
          </div>
        </div>

        {/* PRODUCTS */}
        <div className="matcha-menu__products">
          {visibleItems.map((item, index) => (
            <article
              className={`matcha-item ${
                index === 1 ? "matcha-item--featured" : ""
              }`}
              key={`${item.name}-${currentIndex}`}
            >
              <div className="matcha-item__image">
                <img src={item.image} alt={item.name} />

                <div className="matcha-item__overlay"></div>

                <span className="matcha-item__number">
                  {String(currentIndex + index + 1).padStart(2, "0")}
                </span>

                <span className="matcha-item__category">{item.category}</span>

                <button
                  className="matcha-item__explore"
                  aria-label={`Explore ${item.name}`}
                >
                  <FiArrowUpRight />
                </button>
              </div>

              <div className="matcha-item__content">
                <div className="matcha-item__name">
                  <h3>{item.name}</h3>

                  <p>{item.description}</p>
                </div>

                <div className="matcha-item__price">{item.price}</div>
              </div>
            </article>
          ))}
        </div>

        {/* CONTROLS */}
        <div className="matcha-menu__bottom">
          <div className="matcha-menu__line"></div>

          <span className="matcha-menu__bottom-text">
            PURE · NATURAL · HANDCRAFTED
          </span>

          <div className="matcha-menu__controls">
            <button onClick={previousItems} aria-label="Previous matcha">
              <FiArrowLeft />
            </button>

            <button onClick={nextItems} aria-label="Next matcha">
              <FiArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MatchaMenu;
