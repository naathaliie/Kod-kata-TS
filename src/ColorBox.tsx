/* Skapa komponenten ColorBox som innehåller ett textfält,
 en knapp och en div. När användaren klickar på knappen ska
  diven få den färgen som användaren skrivit i textfältet. */

import { useRef, useState } from "react";

const ColorBox = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [color, setColor] = useState("");

  const handleOnClick = () => {
    if (inputRef.current) {
      setColor(inputRef.current.value);
    }
  };

  return (
    <div className="colorBoxDiv">
      <label htmlFor="colorBox">Välj en färg:</label>
      <input id="colorBox" type="text" ref={inputRef} />
      <button onClick={handleOnClick}>klicka mig</button>
      <div className="choosenColorDiv" style={{ backgroundColor: color }}></div>
    </div>
  );
};

export default ColorBox;
