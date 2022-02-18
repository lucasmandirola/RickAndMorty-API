import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { type } from 'os';
import CharacterCard from './components/CharacterCard';



type Character = {
  id: number;
  name: string;
  status: string;
  image: string;
}

type ApiResponse = {
  results: Character[]
}

// const charactersMock: Character[] = [
//   {
//     id: 1,
//     name: 'Rick Sanchez',
//     status: 'Alive'
//   },
//   {
//     id: 2,
//     name: 'Morty Smith',
//     status: 'Alive'
//   }
// ];

// `https://rickandmortyapi.com/api/character/`

const App = () => {
  const [characters, setCharacters] = useState<Character[]>([])

  React.useEffect(() => {
    (async () => {
      const charactersResponse = (await fetch(
        `https://rickandmortyapi.com/api/character/`).then(res => res.json())) as ApiResponse
        setCharacters(charactersResponse.results)
    })();
    
  }, [])


  return (
    <div className='App'>
     <h1>Code Rick&Morty</h1>

    {/* <button onClick={() => setCharacters(charactersMock)}>Cargar Personajes</button> */}

     <ul className='character-list'>
       {characters.map((character) => {
         return <CharacterCard key={character.id} character={character}/>
         })}
     </ul>
    </div>
    );
};


export default App;
