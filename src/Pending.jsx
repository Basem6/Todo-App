import { Header } from "./Header"
import { TasksContext  } from "./context"
import { Task } from "./Task.jsx"
import {  useContext , useEffect} from "react"
import { Task_pending } from "./Task_pending.jsx";
export function Pending(){
    const { tasks ,setTasks } = useContext(TasksContext);
    useEffect(() => {
                let storedTasks = localStorage.getItem("tasks");
                if (storedTasks) {
                    setTasks(JSON.parse(storedTasks));
                }
    }, []);
    let id_pending_task;
    let first=true;
    let pending_tasks = tasks.filter((task,index)=>{
        if(task.status=="nochecked"){
            if(first){
                // eslint-disable-next-line react-hooks/immutability
                id_pending_task=index;
                first=false;
            }
            return task;
        }
        
    })
    let parsent;
    if(tasks.length!=0){
     parsent=  Math.round(((tasks.length - pending_tasks.length) / tasks.length) * 100).toString();
    }else{
    parsent ="0"
    }
    return(
        <main className="flex-1 flex flex-col ml-64 min-h-screen   bg-background">
            <Header/>
            <div className="px-11 py-8  max-w-full w-full">
            <div className="mb-10">
            <h1 className="text-4xl font-bold tracking-tight text-on-surface mb-2">Pending Tasks</h1>
            <p className="text-on-surface-variant text-lg">You have {pending_tasks.length} tasks awaiting completion for this week.</p>
            </div>
            <div className="flex gap-2 flex-wrap mb-8">
            <Task_pending id={id_pending_task} key={id_pending_task+1}/>
            <div className="grow bg-primary text-on-primary rounded-2xl p-8 flex flex-col justify-between overflow-hidden relative">
            <div className="relative z-10">
            <h4 className="text-lg font-bold mb-1">Weekly Velocity</h4>
            <p className="text-on-primary/70 text-sm">{tasks.length - pending_tasks.length} tasks completed today</p>
            </div>
            <div className="mt-8 relative z-10">
            <div className="text-5xl font-black mb-2">{parsent}%</div>
            <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
            <div className={` h-full bg-white rounded-full`} style={{ width: `${parsent}%` }}></div>
            </div>
            </div>
            
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            </div>
            </div>
            <div className=" bg-surface-container rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6 px-2">
            <h3 className="text-sm font-bold uppercase tracking-widest text-on-surface-variant">Upcoming Items</h3>
            <div className="flex gap-2">
            <button className="p-2 hover:bg-surface-container-high rounded-lg transition-colors">
            <span className="material-symbols-outlined text-lg" data-icon="filter_list">filter_list</span>
            </button>
            <button className="p-2 hover:bg-surface-container-high rounded-lg transition-colors">
            <span className="material-symbols-outlined text-lg" data-icon="more_vert">more_vert</span>
            </button>
            </div>
            </div>
            <div className="space-y-3">        
            {tasks.map((item,index) => {
                if(item.status=="nochecked" && index!=id_pending_task){
                    return (
                    <Task details={tasks[index]} key={index+1} s="p"/>
                );
                }
            })}
            </div>
            </div>
            </div>
        </main>
    )
}