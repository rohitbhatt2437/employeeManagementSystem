import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

export default function TaskList({data}){
    
    return (
        <div id="tasklist" className="h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10">
            {data.tasks.map((elem, idx)=>{
                if(elem.active){
                    return <AcceptTask key={idx}/>
                }
                if(elem.newTask){
                    return <NewTask key={idx}/>
                }
                if(elem.completed){
                    return <CompleteTask key={idx}/>
                }
                if(elem.failed){
                    return <FailedTask key={idx}/>
                }
            })}
        </div>
    )
}