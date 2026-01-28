import {
	PokemonGrid,
	type PokemonsResponse,
	type SimplePokemon,
} from "@/pokemons";

const getPokemons = async (
	limit = 20,
	offset = 0,
): Promise<SimplePokemon[]> => {
	const data = await fetch(
		`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
	);
	const response: PokemonsResponse = await data.json();
	const pokemons: SimplePokemon[] = response.results.map((pokemon) => ({
		id: pokemon.url.split("/").at(-2) || "",
		name: pokemon.name,
	}));
	//throw new Error("Esto es un error que no deberia suceder");
	return pokemons;
};

export default async function PokemonsPage() {
	const pokemons = await getPokemons(151);
	return <PokemonGrid pokemons={pokemons} />;
}
