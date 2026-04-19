import { useContext } from "react";
import { TasksContext } from "./context.js";
export function Task_pending({id}){
    const {tasks } = useContext(TasksContext);
    if(id===undefined){
        return(
            <div className="grow bg-surface-container-lowest rounded-2xl p-8 transition-all hover:shadow-sm">
                <h1 className="text-2xl font-bold text-on-surface">No pending Tasks</h1>
                <p className="text-on-surface-variant leading-relaxed mb-6 max-w-xl ">
                    Great work! You've completed all your tasks for this week. Take a moment to relax and recharge before tackling new challenges ahead.
                </p>
            </div>
        );
    }
    else{
    let details = tasks[id];
    function check(){ 
            if(details.Priority=="Low Priority"){
                return { textColor: "text-on-tertiary", bgColor: "bg-tertiary-container" }
            }if(details.Priority=="Medium Priority"){
                return { textColor: "color-on-secondary-fixed-variant", bgColor: "bg-secondary-container" }
            }if(details.Priority=="High Priority"){
                return { textColor: "text-on-error-container", bgColor: "bg-error-container" }
            }
    }
    let {bgColor , textColor} = check()
    return(
        <div className="grow bg-surface-container-lowest rounded-2xl p-8 transition-all hover:shadow-sm">
            <div className="flex items-center justify-between mb-8">
            <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary-dim mb-1 block">Critical Focus</span>
            <h3 className="text-2xl font-bold text-on-surface">{details.title}</h3>
            </div>
            <div className={`px-4 py-1.5 rounded-full ${bgColor} ${textColor} text-xs font-bold uppercase tracking-wider`}>
                                        {details.Priority}
                                    </div>
            </div>
            <p className="text-on-surface-variant leading-relaxed mb-6 max-w-2xl">
                                    {details.pharse}
            </p>
            <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-slate-500">
            <span className="material-symbols-outlined text-lg" data-icon="calendar_today">calendar_today</span>
            <span className="text-sm font-medium">Due: {details.date}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-500">
            <span className="material-symbols-outlined text-lg" data-icon="group">group</span>
            <span className="text-sm font-medium">Design Team</span>
            </div>
            </div>
        </div>
    )
}
}