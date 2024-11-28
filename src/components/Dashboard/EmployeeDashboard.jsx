import Header from "../other/Header";
import TaskListNumbers from "../other/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

export default function EmployeeDashboard(){
    return(
        <div className="p-10 bg-[#1C1C1C] h-screen">
            <Header/>
            <TaskListNumbers/>
            <TaskList/>
        </div>
    )
}