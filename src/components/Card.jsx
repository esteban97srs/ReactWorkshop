import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Card = ({character}) => {

  const navigate = useNavigate();

    return (
      <div className="card hover-effect" onClick={(() =>{navigate('/detail/' + character?.id)})}>
        <img style={{borderTopLeftRadius:20, borderTopRightRadius:20}} src={character?.image} alt="" />
        <h1 style={{fontSize:25}}>{character.name}</h1>
        <div style={{display:'flex', justifyContent:'space-between', paddingLeft:50, paddingRight:50}}>
          <h2>{character.species}</h2>
          <h2 style={character.status === 'Alive' ? { color:'#51FC72'} : {color:'#B20027'}}>{character.status}</h2>
        </div>
        <h2>{character.origin.name}</h2>
      </div>
    )
  }

export default Card;