import { useState } from "react";
export function Task({title , pharse , Priority ,date , status}){
    let [task , setTask] = useState({title: title, pharse: pharse, Priority: Priority , date: date , status: status})
    function check(){
            if(Priority=="Low Priority"){
                return { textColor: "text-on-tertiary", bgColor: "bg-tertiary-container" }
            }if(Priority=="Medium Priority"){
                return { textColor: "color-on-secondary-fixed-variant", bgColor: "bg-secondary-container" }
            }if(Priority=="High Priority"){
                return { textColor: "text-on-error-container", bgColor: "bg-error-container" }
            }
    }
    console.log(task)
    function  handlecheckbox(e) {
        if(task.status=="checked"){
        e.target.className="material-symbols-outlined text-primary text-xs opacity-0 group-hover:opacity-100"
        e.target.parentElement.className="flex items-center justify-center size-6 transition-colors  rounded-lg border-2 border-primary-fixed-dim hover:bg-primary-fixed-dim group"
        setTask({...task, status: "nochecked"})
        }if(task.status=="nochecked"){    
        e.target.className="material-symbols-outlined text-on-primary text-xs"
        e.target.parentElement.className="flex items-center justify-center size-6 rounded-lg bg-primary border-2 border-primary transition-colors"
        setTask({...task, status: "checked"})
        }   
    }
    
    let { textColor, bgColor } = check()
    if((task.status=="checked")){
        return(
        <div className="task-card flex items-center justify-between p-6 bg-surface-container-lowest rounded-2xl border border-transparent transition-all cursor-pointer" >
                <div className="flex items-center gap-6">
                        <div className="flex items-center justify-center size-6 rounded-lg border-2 border-primary-fixed-dim hover:bg-primary-fixed-dim transition-colors group" onClick={(e)=>{handlecheckbox(e)}}>
                            <span className="material-symbols-outlined text-primary text-xs opacity-0 group-hover:opacity-100">check</span>
                        </div>
                        <div>
                            <h4 className="text-sm font-semibold text-on-surface">{title}</h4>
                            <p className="text-xs text-on-surface-variant mt-1">{pharse}</p>
                        </div>
                </div>
                <div className="flex items-center gap-8">
                        <div className="flex items-center gap-2 text-on-surface-variant">
                            <span className="material-symbols-outlined text-lg">done</span>
                            <span className="">Complete</span>
                        </div>       
                        <span className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider ${textColor}   ${bgColor}`}>{Priority}</span>
                        <span className="material-symbols-outlined text-outline">drag_indicator</span>
                </div>
    </div>
    )
    }else{
    return(
        <div className="task-card flex items-center justify-between p-6 bg-surface-container-lowest rounded-2xl border border-transparent transition-all cursor-pointer">
                <div className="flex items-center gap-6">
                        <div className="flex items-center justify-center size-6 rounded-lg border-2 border-primary-fixed-dim hover:bg-primary-fixed-dim transition-colors group" onClick={(e)=>{handlecheckbox(e)}}>
                            <span className="material-symbols-outlined text-primary text-xs opacity-0 group-hover:opacity-100">check</span>
                        </div>
                        <div>
                            <h4 className="text-sm font-semibold text-on-surface">{title}</h4>
                            <p className="text-xs text-on-surface-variant mt-1">{pharse}</p>
                        </div>
                </div>
                <div className="flex items-center gap-8">
                        <div className="flex items-center gap-2 text-on-surface-variant">
                            <span className="material-symbols-outlined text-lg">calendar_today</span>
                            <span className="text-xs font-medium">{date}</span>
                        </div>       
                        <span className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider ${textColor}   ${bgColor}`}>{Priority}</span>
                        <span className="material-symbols-outlined text-outline">drag_indicator</span>
                </div>
    </div>
    )
    }
}