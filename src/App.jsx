import react, { useContext, useEffect, useState } from "react"
import Login from "./components/auth/Login"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import { AuthContext } from "./context/AuthProvider"

export default function App(){
    const [user, setUser] = useState(null)
    const [loggedInUserData, setLoggedInUserData] = useState(null)
    const authData = useContext(AuthContext)

    // useEffect(()=>{
    //     if(authData){
    //         const loggedInUser = localStorage.getItem("loggedInUser");
    //         if(loggedInUser){
    //             setUser(loggedInUser.role)
    //         }
    //     }
    // },[authData])

    const handleLogin = (email, password)=>{
        if(email=='admin@me.co' && password == '123'){
            setUser('admin')
            localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
        }
        else if(authData){
            const employee = authData.employees.find((e)=>email==e.email && e.password==password)
            if(employee){
                setUser('employee') 
                setLoggedInUserData(employee)
                localStorage.setItem('loggedInUser', JSON.stringify({role:'employee'}))
            }
                      
        }
        else{
            alert("Invalid credentials")
        }
    }
    
    return (
        <>
        {!user ? <Login handleLogin={handleLogin} />: ''}
        {user=='admin'?(<AdminDashboard/>): user=='employee'? (<EmployeeDashboard data={loggedInUserData}/>):null }
        </>
    )
}