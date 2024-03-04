/* En ny komponent ChangeText innehåller ett input-fält 
för text, en knapp och en p-tagg. När man klickar på 
knappen så kopieras texten från input till p-taggen. */

import { useRef, useState } from "react";

const ChangeText = () => {
  const [changedText, setChangedText] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnClick = () => {
    if (inputRef.current) {
      setChangedText(inputRef.current.value);
    }
  };

  return (
    <div>
      <div>
        Din text här: <input type="text" ref={inputRef} />
      </div>
      <div>
        <button onClick={handleOnClick}>Ändra text</button>
      </div>
      <div>
        Texten: <p>{changedText}</p>
      </div>
    </div>
  );
};

export default ChangeText;
