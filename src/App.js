import './App.css';
import Card from './components/Card';
import { useEffect, useState } from 'react';

function App() {

  const [characters, setCharacters] = useState([]);

  const getCharacters = () => {
    try {
      fetch("https://rickandmortyapi.com/api/character") // ⬅️ 1) llamada a la API, el resultado es una Promise
        .then((response) => response.json()) // ⬅️ 2) cuando la petición finalice, transformamos la respuesta a JSON (response.json() también es una Promise)
        .then((character) => setCharacters(character.results));
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getCharacters();
  },[])

  return (
    <div className="App">
      <img style={{maxWidth:600, minWidth:200, padding:20}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1280px-Rick_and_Morty.svg.png' alt='' />
      <section className='cards'>
        {characters?.map((character) => {
          return <Card key={character.id} character={character} />
        })}
      </section>
      <footer>
        <h1>TechSchool 2024</h1>
      </footer>
    </div>
  );
}

export default App;