//components
import { Loading } from "component-library";
import TableView from "./componentes/TableView";
import CardView from "./componentes/CardView";

//hooks
import usePokemonData from "../../hooks/usePokemonData";

//types
import { PokemonsDto } from "../../api";

//context
import { useView } from "../../context/viewContext";

//styles
import "./index.scss";
import { useState } from "react";

export default function Home() {
  const { typeView }: any = useView();
  const [limit, setLimit] = useState<number>(typeView == "table" ? 10 : 20);
  const { pokemons, isLoading, currentPage, totalPages, paginateGoTo } =
    usePokemonData(limit, true);

  return (
    <div className="home-container">
      {isLoading && <Loading />}
      <div className="home-content">
        {typeView == "table" && (
          <TableView
            pokemons={pokemons as PokemonsDto}
            currentPage={currentPage}
            totalPages={totalPages}
            paginateGoTo={paginateGoTo}
          />
        )}
        {typeView === "card" && (
          <CardView
            pokemons={pokemons as PokemonsDto}
            showMore={() => setLimit(limit + 5)}
          />
        )}
      </div>
    </div>
  );
}
