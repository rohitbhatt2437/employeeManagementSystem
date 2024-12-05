import { createContext, useEffect, useState } from "react"
import { getLocalStorage, setLocalStorage } from "../utils/localStorage"

export const AuthContext = createContext()

export default function AuthProvider({children}){

    const [userData, setUserData] = useState(null)

    useEffect(()=>{
        const {employees, admin} = getLocalStorage()
        setLocalStorage()
        setUserData({employees,admin})
    }, [])
    
    return (
        <div>
            <AuthContext.Provider value={userData}>
            {children}
            </AuthContext.Provider>
        </div>
    )

}