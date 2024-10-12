import React, { useEffect, useState }  from 'react';

const Display = ({ name, url }) => {

  const [pokemonImage, setPokemonImage] = useState('');

  useEffect(() => {
    const fetchPokemonImage = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setPokemonImage(data.sprites.front_default);
    };
    fetchPokemonImage();
  }, [url]);

  return (
    <div className="col-md-4">
      <div className="card mb-4">
        <img src={pokemonImage} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
        </div>
      </div>
    </div>
  );
};

export default Display;
