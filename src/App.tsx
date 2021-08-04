import React, { useState } from "react";

//fetchCharacter is api, Character is type
import { fetchCharacter, Character } from "./api";

//components
import Card from "./components/Card";

// styles
import { Wrapper } from "./App.styles";
//context hook
import { useCharacterId } from "./Context"; 





const App: React.FC = () => {
  const [character, setCharacter] = useState<Character>({} as Character );
  const [isLoading, setIsLoading] = useState(false); 
  // const [characterId, setCharacterId] = useState(1);
const {characterId, setCharacterId} = useCharacterId();

  React.useEffect(() => {
    const fetchFromApi = async () => {
      setIsLoading(true);
      const result = await fetchCharacter(characterId);
      setIsLoading(false);
      setCharacter(result);
    };

    fetchFromApi();
  }, [characterId]);
  return (
    <Wrapper characterId={characterId}>
      {isLoading ? (
        <p>Loading....</p>
      ) : (
        <>
          <Card name={character.name} imgUrl={character.img_url} gender={character.gender}/>
          <button onClick={()=>setCharacterId(Math.floor(Math.random() * 10 ) + 1)}> 
            Random character
            
            </button>
        </>
      )}
    </Wrapper>
  );
};
 
export default App;
