import React, { useState } from "react";

function Card() {
  const [toggle, setToggle] = useState(false);
  const [swatchColor, setSwatchColor] = useState("#ffffff");
  const random_hex_color_code = (Math.random() * 0xfffff * 1000000).toString(16);
  const final_color = "#" + random_hex_color_code.slice(0, 6);

  function handleClick(e) {
    setToggle(toggle ? null : true);
    setSwatchColor(final_color);
  }

  return (
    <div className="card">
      <div className="card__outer-container">
        <p className="card__tagline">Click for a random color!</p>
        <div className="card__inner-container">
          <div
            className="card__color-swatch"
            onClick={handleClick}
            style={{ backgroundColor: swatchColor }}
          ></div>
        </div>
        <p className="card__color-code">{swatchColor}</p>
      </div>
    </div>
  );
}

export default Card;
