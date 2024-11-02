import React, { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"

function Github(){
    const data = useLoaderData() // Fetch data using the loader function
    // const [data, setdata] = useState([])
    // useEffect(() =>{
    //     fetch('https://api.github.com/users/sipunpanda')
    //     .then((response) => response.json())
    //     .then((data)=>{
    //         setdata(data)
    //         console.log(data.followers)
    //     })
    // },[])
    return (
        <>
        
           
        <div className='flex items-center justify-around text-center mx-32 my-14 bg-gray-500 text-white p-8 text-3xl'>
        <div>
            <img className="rounded-full transition-all duration-300 blur-sm hover:blur-none" src={data.avatar_url} alt="Git_pic" height={200} width={200}/>

            </div>
            <div>
            Github Followers: {data.public_repos}
            </div>
            
        </div>
      
        


        </>
    )
}


export default Github

export const githunInfoLoader = async () =>{
   const response =await fetch('https://api.github.com/users/sipunpanda')

   return response.json()

}