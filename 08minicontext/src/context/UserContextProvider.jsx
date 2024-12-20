import React from 'react'
import UserContext from './UserContext.js'


function UserContextProvider({children}) {
    const [user, setUser] = React.useState(null)
   console.log(children);
    return (
        <>
        <UserContext.Provider value={{user, setUser}}>
            {children}
            
            

        </UserContext.Provider>
        </>
    )
}

export default UserContextProvider