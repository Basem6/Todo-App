import { TasksContext } from "./context.js";
import { useContext } from "react";
export function Task_complete({id}){ 
    const {tasks} = useContext(TasksContext);
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
    let { textColor, bgColor } = check()
    return(
        <div className="flex items-center gap-6 p-6 hover:bg-surface-container-low/30 transition-colors group">
            <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-secondary-container text-on-secondary-container">
            <span className="material-symbols-outlined" data-icon="check_circle" >check_circle</span>
            </div>
            <div className="flex-1">
            <h4 className="font-semibold text-on-background line-through opacity-50">{details.title}</h4>
            <p className="text-xs text-on-surface-variant mt-1">Completed yesterday at 4:30 PM • 3.5h tracking</p>
            </div>
            <div className="flex items-center gap-4">
            <span className={`px-3 py-1 rounded-full ${bgColor} ${textColor} text-[10px] font-bold uppercase tracking-wider`}>{details.Priority}</span>
            <button className="opacity-0 group-hover:opacity-100 transition-opacity p-1 text-on-surface-variant hover:text-on-background">
            <span className="material-symbols-outlined text-xl" data-icon="more_vert">more_vert</span>
            </button>
            </div>
        </div>
    )

}