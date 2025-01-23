import './PokemonList.css'
import Pokemon from "../Pokemon/Pokemon";
import usePokemonList from "../../hooks/usePokemonList";
import { useEffect } from 'react';
function PokemonList() {
    const [pokemonListState, setPokemonListState] = usePokemonList(false);

    return (
        <div className="pokemon-list-wrapper w-screen">
            <div className="pokemon-wrapper grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 w-full px-4">
                {(pokemonListState.isLoading) ? (
                    <div class="flex justify-center">
                        <div class="animate-spin inline-block size-10 border-[3px] border-current border-t-transparent text-blue-600 rounded-full" role="status" aria-label="loading">
                            {/* <span class="sr-only">Loading...</span> */}
                        </div>
                    </div>
                ) :
                    pokemonListState.pokemonList.map((p) => <Pokemon name={p.name} image={p.image} key={p.id} id={p.id} />)
                }
            </div>
            <div className="controls">
                <button disabled={pokemonListState.prevUrl == null} onClick={() => {
                    const urlToSet = pokemonListState.prevUrl;
                    setPokemonListState({ ...pokemonListState, pokedexUrl: urlToSet })
                }}>Prev</button>
                <button disabled={pokemonListState.nextUrl == null} onClick={() => {
                    console.log(pokemonListState)
                    const urlToSet = pokemonListState.nextUrl;
                    setPokemonListState({ ...pokemonListState, pokedexUrl: urlToSet })
                }}>Next</button>
            </div>
        </div>
    )
}

export default PokemonList;