import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailCard = () => {
  const id = useParams('id');
  const [character, setCharacter] = useState([]);

  const getCharactersById = () => {
    try {
      fetch("https://rickandmortyapi.com/api/character/" + id?.id) // ⬅️ 1) llamada a la API, el resultado es una Promise
        .then((response) => response.json()) // ⬅️ 2) cuando la petición finalice, transformamos la respuesta a JSON (response.json() también es una Promise)
        .then((character) => setCharacter(character));
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getCharactersById();
  },[])

  return (
    <div className="App">
      <img style={{maxWidth:600, minWidth:200, padding:20}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1280px-Rick_and_Morty.svg.png' alt='' />

      <div className="main">
        <div className="main-flex-start">
          <img src={character?.image}></img>
        </div>
        <div>
          <h1 className="main-flex-start">Nombre: {character?.name}</h1>
          <h1>Sexo: {character?.gender}</h1>
          <h1>Ubicación: {character?.location?.name}</h1>
          <h1>Origen: {character?.origin?.name}</h1>
          <h1>Especie: {character?.species}</h1>
          <h1>Estado: {character?.status}</h1>
        </div>
      </div>
    </div>
  )
}

export default DetailCard;