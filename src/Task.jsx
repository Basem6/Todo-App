// import { useState } from "react";
import { TasksContext } from "./context.js";
import { useContext } from "react";
export function Task({id}){
    
    const {tasks , setTasks} = useContext(TasksContext);
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
    function  handlecheckbox(e) {
        if(details.status=="checked"){
        e.target.className="material-symbols-outlined text-primary text-xs opacity-0 group-hover:opacity-100"
        e.target.parentElement.className="flex items-center justify-center size-6 transition-colors  rounded-lg border-2 border-primary-fixed-dim hover:bg-primary-fixed-dim group"
        let newarr = tasks.map((item,index)=>{
            if(index==id){
                return {...item, status: "nochecked"}
            }
            return item;
            
        });
        setTasks(newarr)
        localStorage.setItem("tasks", JSON.stringify(newarr));
        }else{    
        e.target.className="material-symbols-outlined text-on-primary text-xs"
        e.target.parentElement.className="flex items-center justify-center size-6 rounded-lg bg-primary border-2 border-primary transition-colors"
        let newarr = tasks.map((item,index)=>{
            if(index==id){
                return {...item, status: "checked"}
            }
            return item;
        });
        setTasks(newarr)
        localStorage.setItem("tasks", JSON.stringify(newarr));
        }   
    }  
    let statue_task = details.status === "checked" ? "done" : "calendar_today";
    let date_task = details.status === "checked" ? "Completed" : `${details.date}`;
    let { textColor, bgColor } = check()
    return(
        <div className="task-card flex items-center justify-between p-6 bg-surface-container-lowest rounded-2xl border border-transparent transition-all cursor-pointer" >
                <div className={`flex items-center gap-6 `} >
                        <div  className={`flex items-center justify-center size-6 rounded-lg border-2 border-primary-fixed-dim hover:bg-primary-fixed-dim transition-colors group ${details.status === "checked" ? "flex items-center justify-center size-6 rounded-lg bg-primary border-2 border-primary transition-colors border-none" : ""}`} id="r" onClick={(e)=>{handlecheckbox(e)}}>
                            <span className={`${details.status === "checked" ? "material-symbols-outlined text-on-primary text-xs" : "material-symbols-outlined text-primary text-xs opacity-0 group-hover:opacity-100"}`}>check</span>
                        </div>
                        <div>
                            <h4 className="text-sm font-semibold text-on-surface">{details.title}</h4>
                            <p className="text-xs text-on-surface-variant mt-1">{details.pharse}</p>
                        </div>
                </div>
                <div className="flex items-center gap-8">
                        <div className="flex items-center gap-2 text-on-surface-variant">
                            <span className="material-symbols-outlined text-lg"> {statue_task}</span>
                            <span className="text-sm">{date_task}</span>
                        </div>       
                        <span className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider ${textColor}   ${bgColor}`}>{details.Priority}</span>
                        <span className="material-symbols-outlined text-outline">drag_indicator</span>
                </div>
    </div>
    )
    }
