/* En ny komponent Addition som har två inputfält 
och en knapp samt en p-tagg. När användaren klickar
 på knappen ska siffrorna i fälten adderas och summan 
 visas i p-taggen. */

import { useRef, useState } from "react";

const Addition = () => {
  const [subtractedNumbers, setSubtractedNumbers] = useState(0);
  const ref1 = useRef<HTMLInputElement>(null);
  const ref2 = useRef<HTMLInputElement>(null);

  const handleOnClick = () => {
    if (ref1.current && ref2.current) {
      const x = Number(ref1.current.value);
      const y = Number(ref2.current.value);
      console.log(x + y);

      setSubtractedNumbers(x + y);
    }
  };

  return (
    <div className="additionDiv">
      <input ref={ref1} />
      <input ref={ref2} />
      <button onClick={handleOnClick}>Addera tal</button>
      <p>Summan är: {subtractedNumbers}</p>
    </div>
  );
};

export default Addition;
