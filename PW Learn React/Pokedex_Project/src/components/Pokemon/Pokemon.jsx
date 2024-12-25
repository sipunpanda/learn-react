import { Link } from 'react-router-dom';
import './Pokemon.css'

function Pokemon({ name, image, id }) {
    return (
        // <div className='pokemon'>
        //     <Link to={`/pokemon/${id}`}>

        //     </Link>
        // </div>
<div className="grid gap-y-8">

        <div class="Pokemon h-68 w-72 mb-2.5 flex flex-col items-center justify-center max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:bg-slate-400  dark:bg-gray-800 dark:border-gray-700">
          
                <img className="rounded-t-lg" src={image} alt="unavailable" />
            <div class="p-5">
                
                    <h5 class=" name mb-2 text-2xl font-bold tracking-widest underline decoration-2 text-gray-900 dark:text-white hover:text-blue-900">{name}</h5>
            
                <Link to={`/pokemon/${id}`} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </Link>
            </div>
        </div>
</div>

    )
}

export default Pokemon;