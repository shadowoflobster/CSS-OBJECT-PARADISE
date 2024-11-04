import React, { useState } from "react";

import "./home.css";

const Home = () => {
  const [sliderValue, setSliderValue] = useState({
    width: 150,
    height: 150,
    scale: 1,
    scaleX: 1,
    scaleY: 1,
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    skewX: 0,
    skewY: 0,
    borderT: 0,
    borderR: 0,
    borderB: 0,
    borderL: 0,
    radiusTL: 0,
    radiusTR: 0,
    radiusBR: 0,
    radiusBL: 0,
  });
  const [showCss, setShowCss] = useState(false);

  const handleRangeChange = (e, type) => {
    const newValue = Number(e.target.value);
    setSliderValue((prevSliderValue) => ({
      ...prevSliderValue,
      [type]:
        type === "scale" || type === "scaleX" || type === "scaleY"
          ? newValue / 100
          : newValue,
    }));
  };

  const handleResetButton = () => {
    setSliderValue({
      width: 150,
      height: 150,
      scale: 1,
      scaleX: 1,
      scaleY: 1,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      skewX: 0,
      skewY: 0,
      borderT: 0,
      borderR: 0,
      borderB: 0,
      borderL: 0,
      radiusTL: 0,
      radiusTR: 0,
      radiusBR: 0,
      radiusBL: 0,
    });
  };
  const handleCssButton = () => {
    setShowCss(!showCss);
  };

  return (
    <div className="homeDiv">
      <div className="objectTransformsDiv">
        <div className="settingDiv">
          {/* width */}
          <div className="setting">
            <label className="settingLabel">Width:</label>
            <input
              type="range"
              className="settingSlider"
              id="widthRange"
              max="300"
              value={sliderValue.width}
              onChange={(e) => handleRangeChange(e, "width")}
            ></input>
            <input
              className="rangeValue"
              type="number"
              value={sliderValue.width}
              onInput={(e) => handleRangeChange(e, "width")}
            ></input>
            <label>px</label>
          </div>
          {/* height */}
          <div className="setting">
            <label className="settingLabel">Height:</label>
            <input
              type="range"
              className="settingSlider"
              id="heightRange"
              max="300"
              value={sliderValue.height}
              onChange={(e) => handleRangeChange(e, "height")}
            ></input>
            <input
              className="rangeValue"
              type="number"
              value={sliderValue.height}
              onInput={(e) => handleRangeChange(e, "height")}
            ></input>
            <label>px</label>
          </div>
          {/*SCALE */}
          <div className="setting">
            <label className="settingLabel">Scale:</label>
            <input
              type="range"
              className="settingSlider"
              id="scaleRange"
              max="200"
              value={sliderValue.scale * 100}
              onChange={(e) => handleRangeChange(e, "scale")}
            ></input>
            <input
              className="rangeValue"
              type="number"
              value={sliderValue.scale}
              onInput={(e) => handleRangeChange(e, "scale")}
            ></input>
            <label>x</label>
          </div>
          {/* SCALEX */}
          <div className="setting">
            <label className="settingLabel">ScaleX:</label>
            <input
              type="range"
              className="settingSlider"
              id="scaleXRange"
              max="200"
              value={sliderValue.scaleX * 100}
              onChange={(e) => handleRangeChange(e, "scaleX")}
            ></input>
            <input
              className="rangeValue"
              type="number"
              value={sliderValue.scaleX}
              onInput={(e) => handleRangeChange(e, "scaleX")}
            ></input>
            <label>x</label>
          </div>
          {/* ScaleY */}
          <div className="setting">
            <label className="settingLabel">ScaleY:</label>
            <input
              type="range"
              className="settingSlider"
              id="scaleYRange"
              max="200"
              value={sliderValue.scaleY * 100}
              onChange={(e) => handleRangeChange(e, "scaleY")}
            ></input>
            <input
              className="rangeValue"
              type="number"
              value={sliderValue.scaleY}
              onInput={(e) => handleRangeChange(e, "scaleY")}
            ></input>
            <label>x</label>
          </div>
          {/*rotateX*/}
          <div className="setting">
            <label className="settingLabel">RotateX:</label>
            <input
              type="range"
              className="settingSlider"
              id="rotateXRange"
              min="-360"
              max="360"
              value={sliderValue.rotateX}
              onChange={(e) => handleRangeChange(e, "rotateX")}
            ></input>
            <input
              className="rangeValue"
              type="number"
              value={sliderValue.rotateX}
              onInput={(e) => handleRangeChange(e, "rotateX")}
            ></input>
            <label>deg</label>
          </div>
          {/*rotateY*/}
          <div className="setting">
            <label className="settingLabel">RotateY:</label>
            <input
              type="range"
              className="settingSlider"
              id="rotateYRange"
              min="-360"
              max="360"
              value={sliderValue.rotateY}
              onChange={(e) => handleRangeChange(e, "rotateY")}
            ></input>
            <input
              className="rangeValue"
              type="number"
              value={sliderValue.rotateY}
              onInput={(e) => handleRangeChange(e, "rotateY")}
            ></input>
            <label>deg</label>
          </div>
          {/*rotateZ*/}
          <div className="setting">
            <label className="settingLabel">RotateZ:</label>
            <input
              type="range"
              className="settingSlider"
              id="rotateZRange"
              min="-360"
              max="360"
              value={sliderValue.rotateZ}
              onChange={(e) => handleRangeChange(e, "rotateZ")}
            ></input>
            <input
              className="rangeValue"
              type="number"
              value={sliderValue.rotateZ}
              onInput={(e) => handleRangeChange(e, "rotateZ")}
            ></input>
            <label>deg</label>
          </div>
          {/*skewX*/}
          <div className="setting">
            <label className="settingLabel">SkewX:</label>
            <input
              type="range"
              className="settingSlider"
              id="skewXRange"
              min="-360"
              max="360"
              value={sliderValue.skewX}
              onChange={(e) => handleRangeChange(e, "skewX")}
            ></input>
            <input
              className="rangeValue"
              type="number"
              value={sliderValue.skewX}
              onInput={(e) => handleRangeChange(e, "skewX")}
            ></input>
            <label>deg</label>
          </div>
          {/*skewY*/}
          <div className="setting">
            <label className="settingLabel">SkewY:</label>
            <input
              type="range"
              className="settingSlider"
              id="skewYRange"
              min="-360"
              max="360"
              value={sliderValue.skewY}
              onChange={(e) => handleRangeChange(e, "skewY")}
            ></input>
            <input
              className="rangeValue"
              type="number"
              value={sliderValue.skewY}
              onInput={(e) => handleRangeChange(e, "skewY ")}
            ></input>
            <label>deg</label>
          </div>
          <span className="borderHeader">Border Properties:</span>
          {/*Top Border*/}
          <div className="setting">
            <label className="settingLabel">Top Border:</label>
            <input
              type="range"
              className="settingSlider"
              id="borderTRange"
              min="0"
              max="20"
              value={sliderValue.borderT}
              onChange={(e) => handleRangeChange(e, "borderT")}
            ></input>
            <input
              className="rangeValue"
              type="number"
              value={sliderValue.borderT}
              onInput={(e) => handleRangeChange(e, "borderT")}
            ></input>
            <label>px</label>
          </div>
          {/*Right Border*/}
          <div className="setting">
            <label className="settingLabel">Right Border:</label>
            <input
              type="range"
              className="settingSlider"
              id="borderRRange"
              min="0"
              max="20"
              value={sliderValue.borderR}
              onChange={(e) => handleRangeChange(e, "borderR")}
            ></input>
            <input
              className="rangeValue"
              type="number"
              value={sliderValue.borderR}
              onInput={(e) => handleRangeChange(e, "borderR")}
            ></input>
            <label>px</label>
          </div>
          {/*Bottom Border*/}
          <div className="setting">
            <label className="settingLabel">Bottom Border:</label>
            <input
              type="range"
              className="settingSlider"
              id="borderBRange"
              min="0"
              max="20"
              value={sliderValue.borderB}
              onChange={(e) => handleRangeChange(e, "borderB")}
            ></input>
            <input
              className="rangeValue"
              type="number"
              value={sliderValue.borderB}
              onInput={(e) => handleRangeChange(e, "borderB")}
            ></input>
            <label>px</label>
          </div>
          {/*Left Border*/}
          <div className="setting">
            <label className="settingLabel">Left Border:</label>
            <input
              type="range"
              className="settingSlider"
              id="borderLRange"
              min="0"
              max="20"
              value={sliderValue.borderL}
              onChange={(e) => handleRangeChange(e, "borderL")}
            ></input>
            <input
              className="rangeValue"
              type="number"
              value={sliderValue.borderL}
              onInput={(e) => handleRangeChange(e, "borderL")}
            ></input>
            <label>px</label>
          </div>
          <span className="borderHeader">Border Radius:</span>
          {/*Top Left Radius*/}
          <div className="setting">
            <label className="settingLabel">Top Left Radius:</label>
            <input
              type="range"
              className="settingSlider"
              id="radiusTLRange"
              min="0"
              max="200"
              value={sliderValue.radiusTL}
              onChange={(e) => handleRangeChange(e, "radiusTL")}
            ></input>
            <input
              className="rangeValue"
              type="number"
              value={sliderValue.radiusTL}
              onInput={(e) => handleRangeChange(e, "radiusTL")}
            ></input>
            <label>px</label>
          </div>
          {/*Top Right Radius*/}
          <div className="setting">
            <label className="settingLabel">Top Right Radius:</label>
            <input
              type="range"
              className="settingSlider"
              id="radiusTRRange"
              min="0"
              max="200"
              value={sliderValue.radiusTR}
              onChange={(e) => handleRangeChange(e, "radiusTR")}
            ></input>
            <input
              className="rangeValue"
              type="number"
              value={sliderValue.radiusTR}
              onInput={(e) => handleRangeChange(e, "radiusTR")}
            ></input>
            <label>px</label>
          </div>
          {/*Bottom Right Radius*/}
          <div className="setting">
            <label className="settingLabel">Bottom Right Radius:</label>
            <input
              type="range"
              className="settingSlider"
              id="radiusBRRange"
              min="0"
              max="200"
              value={sliderValue.radiusBR}
              onChange={(e) => handleRangeChange(e, "radiusBR")}
            ></input>
            <input
              className="rangeValue"
              type="number"
              value={sliderValue.radiusBR}
              onInput={(e) => handleRangeChange(e, "radiusBR")}
            ></input>
            <label>px</label>
          </div>
          {/*Bottom Left Radius*/}
          <div className="setting">
            <label className="settingLabel">Bottom Left Radius:</label>
            <input
              type="range"
              className="settingSlider"
              id="radiusBLRange"
              min="0"
              max="200"
              value={sliderValue.radiusBL}
              onChange={(e) => handleRangeChange(e, "radiusBL")}
            ></input>
            <input
              className="rangeValue"
              type="number"
              value={sliderValue.radiusBL}
              onInput={(e) => handleRangeChange(e, "radiusBL")}
            ></input>
            <label>px</label>
          </div>

          <button className="resetBtn" onClick={handleResetButton}>
            Reset
          </button>
          <button className="csscodeBtn" onClick={handleCssButton}>
            CSS Code
          </button>
          {showCss && (
            <div
              className="CodeDiv"
              style={{
                width: "100%",
                height: "200px",
                backgroundColor: "pink",
              }}
            >
              width: ${sliderValue.width}px; height: ${sliderValue.height}px;
              <br></br>
              transform:
              {`${
                sliderValue.scale !== 1 ? ` scale(${sliderValue.scale}x)` : ""
              } 
        ${sliderValue.scaleX !== 1 ? ` scaleX(${sliderValue.scaleX}x)` : ""}
        ${sliderValue.scaleY !== 1 ? ` scale(${sliderValue.scaleY}x)` : ""}
        ${
          sliderValue.rotateX !== 0 ? `rotateX(${sliderValue.rotateX}deg)` : ""
        } 
        ${
          sliderValue.rotateY !== 0 ? `rotateY(${sliderValue.rotateY}deg)` : ""
        } 
        ${
          sliderValue.rotateZ !== 0 ? `rotateZ(${sliderValue.rotateZ}deg)` : ""
        } 
        ${sliderValue.skewX !== 0 ? `skewX(${sliderValue.skewX}deg)` : ""}
        ${sliderValue.skewY !== 0 ? `skewY(${sliderValue.skewY}deg)` : ""}
    `}
            </div>
          )}
        </div>
      </div>
      <div className="objectDiv">
        <div
          className="object"
          id="objectToManipulate"
          style={{
            transform: `scale(${sliderValue.scale}) 
            scaleX(${sliderValue.scaleX}) 
            scaleY(${sliderValue.scaleY}) 
            rotateX(${sliderValue.rotateX}deg) 
            rotateY(${sliderValue.rotateY}deg) 
            rotateZ(${sliderValue.rotateZ}deg)
            skewX(${sliderValue.skewX}deg)
            skewY(${sliderValue.skewY}deg)`,
            width: `${sliderValue.width}px`,
            height: `${sliderValue.height}px`,
            border: `0px solid white`,
            borderTop: `${sliderValue.borderT}px solid white`,
            borderRight: `${sliderValue.borderR}px solid white`,
            borderBottom: `${sliderValue.borderB}px solid white`,
            borderLeft: `${sliderValue.borderL}px solid white`,
            borderRadius:`${sliderValue.radiusTL}px ${sliderValue.radiusTR}px ${sliderValue.radiusBR}px ${sliderValue.radiusBL}px`
          }}
        ></div>
      </div>
    </div>
  );
};

export default Home;
