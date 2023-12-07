import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getData } from "../api/endPoints/pokemons";
import { GetParamsToSend, PokemonDto, PokemonsDto, ResponseData } from "../api";

function usePokemonData(limit: number, initData: boolean) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [pokemons, setPokemons] = useState<PokemonsDto>([]);
  const [pokemon, setPokemon] = useState<PokemonDto>();
  const params = new URLSearchParams(location.search);
  const page = params.get("offset")
    ? parseInt(params.get("offset") as string) / 10
    : 1;

  const [currentPage, setCurrentPage] = useState(page);
  const [totalPages, setTotalPages] = useState(page);

  const getPokemons = async () => {
    setIsLoading(true);
    const offset = params.get("offset")
      ? parseInt(params.get("offset") as string)
      : 0;

    const paramsToSend: GetParamsToSend = {
      type: "all",
      offset,
      limit: limit,
      requets: "",
    };

    const res: ResponseData = await getData(paramsToSend);

    const promise = res.results.map(async (item) => {
      const url = item?.url?.split("v2").pop();
      const result: PokemonDto = await getPokemonDetail(url as string);
      return {
        name: result.name,
        img: result.sprites?.other?.dream_world.front_default as string,
        id: result.id,
        base_experience: result.base_experience,
      };
    });

    const resultDetailPokemon = await Promise.all(promise);

    setPokemons([...resultDetailPokemon]);
    setTotalPages(res?.count / 10);
    setIsLoading(false);
  };

  const getPokemonDetail = async (requets: string) => {
    const paramsToSend: GetParamsToSend = {
      type: "detail",
      offset: 0,
      limit: 0,
      requets,
    };
    const res: PokemonDto = await getData(paramsToSend);

    return res;
  };

  const showPokemon = async (idToSend: number) => {
    setIsLoading(true);
    const { name, id, base_experience, sprites, stats, types, weight, height } =
      await getPokemonDetail(`/pokemon/${idToSend}`);

    setPokemon({
      name,
      img: sprites?.other?.dream_world.front_default as string,
      url: "",
      id,
      base_experience,
      weight,
      height,
      stats,
      types,
    });

    setIsLoading(false);
  };

  /**
   * this useEffect observed the page state to call getUsers,
   * the page value is for the pagination
   */
  useEffect(() => {
    if (initData) getPokemons();
  }, [page, limit]);

  /**
   * @description This method validates if the page param exists in the url and if it exists it changes the value,
   * otherwise it adds the page param in the url
   * @param newPage
   */
  function paginateGoTo(newPage: number) {
    const offset = params.get("offset");
    let totalOffset = 0;
    if (offset) {
      totalOffset = newPage * 10;
      params.set("offset", `${totalOffset}`);
    } else {
      totalOffset = newPage * 10;
      params.append("offset", `${totalOffset}`);
    }
    setCurrentPage(totalOffset / 10);
    navigate(`${location.pathname}?${params.toString()}`);
  }

  return {
    pokemons,
    pokemon,
    isLoading,
    currentPage,
    totalPages: Math.trunc(totalPages),
    showPokemon,
    paginateGoTo,
  };
}

export default usePokemonData;
