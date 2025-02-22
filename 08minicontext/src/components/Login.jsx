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
        <div >
            <h2>Login</h2>
            <input type="text" style={{marginBottom:'10px'}}
            value={username}
            onChange={(e)=> setUsername(e.target.value)}
            placeholder='username' />
            <br></br>
            <input type="password" style={{marginBottom:'10px'}}
            value={password}
            onChange={(e)=> setPasssword(e.target.value)}
            placeholder='passsword' />
            <br></br>
            <button onClick={handlesubmit}>Submit</button>
        </div>
    )
}

export default Login;