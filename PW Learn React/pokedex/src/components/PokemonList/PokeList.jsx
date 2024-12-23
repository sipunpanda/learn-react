import axios from 'axios';
import { useEffect, useState } from 'react';

   function PokeList(){
    const [pokeList, setPokeList] = useState([]);
    async function PokePic (){
        const pokeResponse = await axios.get('https://pokeapi.co/api/v2/pokemon');
        const eachResponse =  pokeResponse.data.results
        // console.log(eachResponse);
        const pokeResult = eachResponse.map((each)=>{
           return axios.get(each.url)
           
        })
        const pokeData = await axios.all(pokeResult)
        console.log(pokeData);

     const result = pokeData.map((poke)=>{
        return{
            id: poke.data.id,
            name: poke.data.name,
            img: poke.data.sprites.other.dream_world.front_default
            
         

        }
     })
     console.log(result);
        setPokeList(result);

   
    }

    useEffect(()=>{
        PokePic();
        console.log("Byeeeee");
        
    },[]);
    

return(
   <div className="grid grid-cols-4 gap-4">
    {pokeList.map((pokeData)=>{
        return(
            <div class="flex flex-col items-center justify-center max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src={pokeData.img} alt="unavailable" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-wider underline decoration-2 text-gray-900 dark:text-white">{pokeData.name}</h5>
        </a>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
        )
    })}



   
   </div>
)

}

export default PokeList;