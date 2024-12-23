import PokeList from "../PokemonList/PokeList";
import Search from "../Search/Search";
import './Pokedex.css';

function Pokedex(){
    return (
        <div >
       <h1 className="text-lg text-red-700">Pokedex</h1>
        <Search />
        <PokeList />
        </div>
    )
}


export default Pokedex;