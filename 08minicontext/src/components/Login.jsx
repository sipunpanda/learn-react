import React from 'react';

import UserContext from '../context/UserContext';
import { useContext } from 'react';
import { useState } from 'react';


function Login() {
const [username, setUsername] = useState('')
const [password, setPasssword] = useState('')

const {setUser} = useContext(UserContext)


    function handlesubmit(e){
        e.preventDefault()
        setUser({username, password})
    }
    return(
        <div>
            <h2>Login</h2>
            <input type="text"
            value={username}
            onChange={(e)=> setUsername(e.target.value)}
            placeholder='username' />
            <input type="password"
            value={password}
            onChange={(e)=> setPasssword(e.target.value)}
            placeholder='passsword' />
            <button onClick={handlesubmit}>Submit</button>
        </div>
    )
}

export default Login;