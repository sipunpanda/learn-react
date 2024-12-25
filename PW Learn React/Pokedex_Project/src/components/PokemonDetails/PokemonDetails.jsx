import { useParams } from "react-router-dom";
import './PokemonDetails.css';
import usePokemonDetails from "../../hooks/usePokemonDetails";
function PokemonDetails({ pokemonName }) {
    const { id } = useParams();
    const [pokemon] = usePokemonDetails(id, pokemonName);
    return (
        <div className="pokemon-details-wrapper w-screen">
            <img className="pokemon-details-image" src={pokemon.image} />
            <div className="pokemon-details-name"><span>{pokemon.name}</span></div>
            <div className="pokemon-details-name">Height: {pokemon.height}</div>
            <div className="pokemon-details-name">Weight: {pokemon.weight}</div>
            <div className="pokemon-details-types">
                {pokemon.types && pokemon.types.map((t) => <div key={t}> {t} </div>)}
            </div>

            {
                pokemon.types && pokemon.similarPokemons &&
                <div className="flex flex-col items-center justify-center">

                    <h1 className="text-xl bg-slate-200 p-2 rounded-lg mt-2">
                        More {pokemon.types[0]} type pokemons
                    </h1>

                    <div>
{/* {console.log({pokemon},"meeeeeeeeeeee")} */}
                        <div className=" w-screen grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-1 p-2">
                            {pokemon.similarPokemons.map((p) => <div className=" bg-slate-300 hover:bg-slate-500 m-2 rounded-md flex text-center justify-center" key={p.pokemon.url}>{p.pokemon.name}</div>)}


                            {/* {pokemon.similarPokemons.map((p) => <Link to={`/pokemon/${id}`} > <div className=" bg-slate-300 hover:bg-slate-500 m-2 rounded-md flex text-center justify-center" key={p.pokemon.url}>{p.pokemon.name}</div> </Link>)} */}

                        </div>
                    </div>



                </div>
            }
        </div>
    );
}

export default PokemonDetails;