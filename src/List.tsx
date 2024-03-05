/* Skapa komponenten List som har ett textfält, 
knapp och ul. När användaren klickar på knappen 
ska en ny punkt läggas till i listan med det som 
stod i textfältet. */

import { useRef, useState } from "react";

const List = () => {
  /* Rad 10: Skapar en array av strängar och sätter som default-värde till addedItem
       för att visa upp något.
       Rad 11: inputRef använder jag för att kunna hämta in referensen (värdet) från 
       inputfältet utan att rendera om sidan när ett nytt ord skrivs in.
       Rad 12: Funktionen handleOnClick, */
  const s: string[] = ["Kärlek", "Regnbågar", "Kattungar"];
  const [addedItem, setAddedItem] = useState(s);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnClick = () => {
    //.current.value är bara true om den innehåller något (jag har satt null som default)
    if (inputRef.current?.value) {
      console.log(inputRef.current.value);
      setAddedItem([...addedItem, inputRef.current.value]);
    }
  };

  return (
    <div className="listDiv">
      <h3>En lista med ord</h3>
      <input type="text" ref={inputRef} />
      <button onClick={handleOnClick}>Lägg till i listan</button>
      {addedItem.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </div>
  );
};

export default List;
