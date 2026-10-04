import React, { useState } from "react";
import "./styles.css";

export default function PriceRangeSlider({ MIN = 0, MAX = 10000, STEP = 100 }) {
  const [minVal, setMinVal] = useState(2000);
  const [maxVal, setMaxVal] = useState(7500);
  const [minTextVal, setMinTextVal] = useState(minVal);
  const [maxTextVal, setMaxTextVal] = useState(maxVal);

  const handleMinChange = (e) => {
    const sliderValue = e.target.value;
    if (sliderValue <= maxVal) {
      setMinVal(sliderValue);
    }
  };
  const handleMaxChange = (e) => {
    const sliderValue = e.target.value;
    if (sliderValue >= minVal) {
      setMaxVal(sliderValue);
    }
  };

  /**
   * Calculate positioning based on min and max value
   * color highlighting
   * test all cases
   */
  const widthPercentage = Math.floor(((maxVal - minVal) / MAX) * 100);
  return (
    <div className="slider-container">
      <h2>Price Range</h2>

      {/* Inputs */}
      <div className="inputs">
        <input
          data-testid="min-input"
          type="number"
          value={minVal}
          onChange={handleMinChange}
        />
        <input
          data-testid="max-input"
          type="number"
          value={maxVal}
          onChange={handleMaxChange}
        />
      </div>

      {/* Sliders */}
      <div className="slider-track">
        <div
          class="slider-active-range"
          data-testid="slider-active-range"
          style={{
            left: `${((minVal - MIN) / MAX) * 100}%`,
            width: `${widthPercentage}%`,
          }}
        ></div>
        <div
          data-testid="min-label"
          className="slider-label"
          style={{ left: `${((minVal - MIN) / MAX) * 100}%` }}
        >
          ₹{minVal}
        </div>
        <div
          data-testid="max-label"
          className="slider-label"
          style={{ left: `${((maxVal - MIN) / MAX) * 100}%` }}
        >
          ₹{maxVal}
        </div>
        <input
          data-testid="min-slider"
          type="range"
          value={minVal}
          min={MIN}
          max={MAX}
          onChange={handleMinChange}
          step={STEP}
          className="thumb thumb--left"
        />
        <input
          data-testid="max-slider"
          type="range"
          min={MIN}
          max={MAX}
          value={maxVal}
          onChange={handleMaxChange}
          step={STEP}
          className="thumb thumb--right"
        />
      </div>

      {/* Labels */}

      {/* Track fill placeholder */}
      <div data-testid="slider-track-fill"></div>
    </div>
  );
}
