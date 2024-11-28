import react, { useEffect } from "react"
import Login from "./components/auth/Login"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import { getLocalStorage, setLocalStorage } from "./utils/localStorage"

export default function App(){

    useEffect(()=>{
        // setLocalStorage()
        getLocalStorage()
    },)
    return (
        <>
        <Login/>
        {/* <EmployeeDashboard/> */}
        {/* <AdminDashboard/> */}
        </>
    )
}