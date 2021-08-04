import React, { useState } from "react";

//fetchCharacter is api, Character is type
import { fetchCharacter, Character } from "./api";

//components
import Card from "./components/Card";
import Item from './components/Items'

// styles
import { Wrapper } from "./App.styles";
//context hook
import { useCharacterId } from "./Context";

const App: React.FC = () => {
  const [character, setCharacter] = useState<Character>({} as Character);
  const [isLoading, setIsLoading] = useState(false);
  // const [characterId, setCharacterId] = useState(1);
  const { characterId, setCharacterId } = useCharacterId();

  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    const fetchFromApi = async () => {
      setIsLoading(true);
      const result = await fetchCharacter(characterId);
      setIsLoading(false);
      setCharacter(result);
    };

    fetchFromApi();
  }, [characterId]);

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    setCharacterId(Number(inputRef.current?.value));
  };

  return (
    <Wrapper characterId={characterId}>
      {isLoading ? (
        <p>Loading....</p>
      ) : (
        <>
          <Card
            name={character.name}
            imgUrl={character.img_url}
            gender={character.gender}
          />
          <Item item={character} onClick={(item)=>console.log(item.origin)}/>
          <input type="text"  placeholder='type a number' ref={inputRef} />
          <button onClick={handleButtonClick}>Get characters</button>
        </>
      )}
    </Wrapper>
  );
};

export default App;
