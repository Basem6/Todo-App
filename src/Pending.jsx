import { Header } from "./Header"
import { TasksContext  } from "./context"
import { Task } from "./Task.jsx"
import { useContext , useEffect} from "react"
export function Pending(){
    const { tasks ,setTasks } = useContext(TasksContext);
    useEffect(() => {
                let storedTasks = localStorage.getItem("tasks");
                if (storedTasks) {
                    setTasks(JSON.parse(storedTasks));
                }
    }, []);
    return(
        <main className="flex-1 flex flex-col ml-64 min-h-screen   bg-background">
            <Header/>
            <div className="px-11 py-8  max-w-full w-full">
            <div className="mb-10">
            <h1 className="text-4xl font-bold tracking-tight text-on-surface mb-2">Pending Tasks</h1>
            <p className="text-on-surface-variant text-lg">You have 8 tasks awaiting completion for this week.</p>
            </div>
            <div className="flex gap-2 flex-wrap mb-8">
            <div className="grow bg-surface-container-lowest rounded-2xl p-8 transition-all hover:shadow-sm">
            <div className="flex items-center justify-between mb-8">
            <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary-dim mb-1 block">Critical Focus</span>
            <h3 className="text-2xl font-bold text-on-surface">Redesign Brand Identity</h3>
            </div>
            <div className="px-4 py-1.5 rounded-full bg-error-container text-on-error-container text-xs font-bold uppercase tracking-wider">
                                        High Priority
                                    </div>
            </div>
            <p className="text-on-surface-variant leading-relaxed mb-6 max-w-2xl">
                                    Finalize the visual language for the new dashboard, including icon sets, typography scales, and the tonal color architecture. Ensure contrast ratios meet WCAG accessibility standards.
                                </p>
            <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-slate-500">
            <span className="material-symbols-outlined text-lg" data-icon="calendar_today">calendar_today</span>
            <span className="text-sm font-medium">Due: Oct 24, 2023</span>
            </div>
            <div className="flex items-center gap-2 text-slate-500">
            <span className="material-symbols-outlined text-lg" data-icon="group">group</span>
            <span className="text-sm font-medium">Design Team</span>
            </div>
            </div>
            </div>
            <div className="grow bg-primary text-on-primary rounded-2xl p-8 flex flex-col justify-between overflow-hidden relative">
            <div className="relative z-10">
            <h4 className="text-lg font-bold mb-1">Weekly Velocity</h4>
            <p className="text-on-primary/70 text-sm">4 tasks completed today</p>
            </div>
            <div className="mt-8 relative z-10">
            <div className="text-5xl font-black mb-2">68%</div>
            <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
            <div className="w-[68%] h-full bg-white rounded-full"></div>
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
                if(item.status=="nochecked"){
                    return (
                    <Task id={index} key={index+1}/>
                );
                }
            })}
            </div>
            </div>
            </div>
        </main>
    )
}