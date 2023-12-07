export interface PokemonDto {
  id: number;
  url?: string;
  img: string;
  name: string;
  base_experience: number;
  sprites?: {
    front_default?: string;
    other?: {
      dream_world: {
        front_default: string;
      };
    };
  };
  types?: Array<{ type: { name: string } }>;
  stats?: Array<{ base_stat: number; stat: { name: string } }>;
  height?: number;
  weight?: number;
}

export interface PokemonsDto extends Array<PokemonDto> {}

export interface ResponseData extends PokemonDto {
  count: number;
  next: string;
  previous: string | null;
  results: PokemonsDto;
}

export interface GetParamsToSend {
  type: string;
  offset: number;
  limit: number;
  requets: string;
}
