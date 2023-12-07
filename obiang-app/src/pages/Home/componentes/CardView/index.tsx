import { Link } from "react-router-dom";

//components
import { Button } from "component-library";

//images
import defaultImg from "../../../../assets/default-img.png";

//types
import { PokemonsDto } from "../../../../api";

//styles
import "./index.scss";

interface CardViewProps {
  pokemons: PokemonsDto;
  showMore: () => void;
}

export default function CardView({ pokemons, showMore }: CardViewProps) {
  return (
    <div className="card-container">
      <div className="card-content">
        {pokemons?.map((item) => {
          return (
            <Link
              to={`/obiang-monorepo-app/pokemon/${item.id}`}
              key={item.id}
              className="card-pokemon-content"
            >
              <div
                className="card-img-content"
                data-testid="card-pokemon-content"
              >
                <img
                  data-testid="card-img"
                  src={item.img ? item.img : defaultImg}
                  alt={item.name}
                />
              </div>
              <div className="card-info-content">
                <span className="pokemon-id">N° {item.id}</span>
                <h2>{item.name}</h2>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="button-content">
        <Button onClick={() => showMore()}>Show more...</Button>
      </div>
    </div>
  );
}
