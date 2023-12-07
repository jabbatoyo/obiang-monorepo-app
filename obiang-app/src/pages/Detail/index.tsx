import { useEffect } from "react";
import { useParams } from "react-router-dom";

//hooks
import usePokemonData from "../../hooks/usePokemonData";

//components
import { Loading } from "component-library";

//images
import defaultImg from "../../assets/default-img.png";

//styles
import "./index.scss";

export default function Detail() {
  const { id } = useParams();
  const { pokemon, isLoading, showPokemon } = usePokemonData(0, false);
  useEffect(() => {
    showPokemon(parseInt(id as string));
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="detail-container">
      <div className="detail-content">
        <div className="section-one-content">
          <img
            src={pokemon?.img ? pokemon.img : defaultImg}
            alt={pokemon?.name}
          />
          <h1>{pokemon?.name}</h1>
        </div>
        <div className="section-two-content">
          <div className="height-content">
            <p className="p-height">Height</p>
            <p className="p-height-value">{pokemon?.height}</p>
          </div>
          <div className="weight-content">
            <p className="p-weight">Weight</p>
            <p className="p-weight-value">{pokemon?.weight}</p>
          </div>
        </div>
        <div className="section-tree-content">
          <h2>Stats</h2>
          <div className="stats-container">
            {pokemon?.stats?.map((item, index) => (
              <div className="stats-content" key={index}>
                <span>{item.stat.name.replace("-", " ")}</span>
                <progress
                  className="stats-bar"
                  max="100"
                  value={item.base_stat}
                />
                <span>{item.base_stat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
