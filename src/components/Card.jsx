import React, { useState, useRef } from 'react';

function Card() {
  const [toggle, setToggle] = useState(false);
  const [swatchColor, setSwatchColor] = useState('#000000');
  const [isCopied, setIsCopied] = useState(false);
  const random_hex_color_code = (Math.random() * 0xfffff * 1000000).toString(16);
  const final_color = '#' + random_hex_color_code.slice(0, 6);
  const colorElement = useRef();

  function handleClick(e) {
    setToggle(toggle ? null : true);
    setSwatchColor(final_color);
    setIsCopied(false);
  }

  function copyToClipboard() {
    const { current } = colorElement;
    current.select();
    document.execCommand('copy');
    setIsCopied(true);
  }

  return (
    <div className='card'>
      <div className='card__outer-container'>
        <p className='card__tagline'>Click for a random color!</p>
        <div className='card__inner-container'>
          <div
            className='card__color-swatch'
            onClick={handleClick}
            style={{ backgroundColor: swatchColor }}></div>
        </div>
        <input readOnly ref={colorElement} className='card__color-code' value={swatchColor} />
        <p onClick={copyToClipboard}>{!isCopied ? 'Copy To Clipboard' : 'Copied'}</p>
      </div>
    </div>
  );
}

export default Card;
