import React from 'react'
import UserContext from './UserContext'
import { useState } from 'react'

const UserContextProvider = ({children})=> {

    let [user, setUser] = useState(null)

  return (
    <UserContext.Provider value={{user, setUser}}>
    {children}
    </UserContext.Provider>
)
}

export default UserContextProvider