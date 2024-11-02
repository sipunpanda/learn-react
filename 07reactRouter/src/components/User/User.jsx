import React from 'react';
import { useParams } from 'react-router-dom';

function User(){
    const { userId } = useParams(); // Get the userId from the route parameter
    return (
        <>
        <div className='bg-gray-700 text-white p-4'>
            <h1 className='text-xl'>User:{userId}</h1>
            
        </div>
        </>
    )
}

export default User;