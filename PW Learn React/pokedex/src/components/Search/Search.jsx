
import './Search.css';
function Search(){
    return (
        <div className='search-wrapp'>
        <input className='pokemon-name-search border-2 rounded-xl border-rose-500 block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-red-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6'
        type="text"
        placeholder="pokemon name...."
        />
        </div>
    )
}

export default Search;