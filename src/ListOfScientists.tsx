/* Gör en komponent som är en lista av fordon? 
vetenskapspersoner? konstnärer? Vår listkomponent 
ska ha en typad array i state och visa upp den arrayen 
som en punktlista (precis som vårt kodexempel ovan). */

type Scientists = {
  id: number;
  name: string;
  born: number;
  description: string;
};

const ListOfScientists = () => {
  const allScientists: Scientists[] = [
    {
      id: 0,
      name: "Marie Curie",
      born: 1867,
      description:
        "Polsk-född fysiker och kemist som var den första kvinnan att vinna en Nobelpris och är känd för sin forskning om radioaktivitet. Hon var den enda personen som vunnit Nobelpris i två olika vetenskapliga discipliner (fysik och kemi).",
    },
    {
      id: 1,
      name: "Ada Lovelace",
      born: 1815,
      description:
        "Brittisk matematiker och författare, ofta kallad världens första datavetenskapare. Hon var den första som insåg potentialen i Charles Babbages analytiska maskin och skrev den första algoritmen som skulle köras på en dator.",
    },
    {
      id: 2,
      name: "Jane Goodall",
      born: 1934,
      description:
        "Den brittiska primatologen och antropologen, känd för sitt banbrytande arbete med schimpanser i Gombe Stream National Park i Tanzania. Hennes forskning har bidragit avsevärt till förståelsen av primater, inklusive deras sociala beteende och relationer.",
    },
  ];

  return (
    <div className="listOfScientistsDiv">
      <h3>List Of Scientists</h3>
      {allScientists.map((scientist, index) => {
        return (
          <div key={scientist.id} className={`scientist${index}`}>
            <h4>
              {scientist.name}. Född:{scientist.born}
            </h4>
            <ul>
              <li>{scientist.description}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default ListOfScientists;
