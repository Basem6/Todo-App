// import { TasksContext  } from "./context.jsx";
import {useToast} from "./ToastContext.jsx"
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';
// import { useContext  } from "react";
import {useTasks} from './Tasksprovider.jsx'
import {
    Menubar,
    MenuRoot,
    MenuTrigger,
    MenuPortal,
    MenuPositioner,
    MenuPopup,
    MenuItem,
    MenuSeparator,
    MenuSubmenuRoot,
    MenuSubmenuTrigger,
} from './Menubar';
export function Task({details , s , dilogdelete , dilogubdate}){
    const {showAlert} = useToast();
    const {tasks , setTasks} = useTasks();
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
            if(index==tasks.indexOf(details)){
                return {...item, status: "nochecked"}
            }
            return item;
        });
        setTasks(newarr)
        showAlert("success" , "Task is Not Completed Successfuly")
        localStorage.setItem("tasks", JSON.stringify(newarr));
        }else{    
        e.target.className="material-symbols-outlined text-on-primary text-xs"
        e.target.parentElement.className="flex items-center justify-center size-6 rounded-lg bg-primary border-2 border-primary transition-colors"
        let newarr = tasks.map((item,index)=>{
            if(index==tasks.indexOf(details)){
                return {...item, status: "checked"}
            }
            return item;
        });
        setTasks(newarr)
        showAlert("success" , "Task is Completed Successfuly")
        localStorage.setItem("tasks", JSON.stringify(newarr));
        }   
    }  
    let statue_task = details.status === "checked" ? "done" : "calendar_today";
    let date_task = details.status === "checked" ? "Completed" : `${details.date}`;
    let { textColor, bgColor } = check()
    return(
        <div className="task-card flex items-center justify-between p-6 bg-surface-container-lowest rounded-2xl border border-transparent transition-all cursor-pointer" >
                <div className={`flex items-center gap-6 `} >
                        <div  className={`${s=="p"?"hidden":"flex"} items-center justify-center size-6 rounded-lg border-2 border-primary-fixed-dim hover:bg-primary-fixed-dim transition-colors group ${details.status === "checked" ? "flex items-center justify-center size-6 rounded-lg bg-primary border-2 border-primary transition-colors border-none" : ""}`} id="r" onClick={(e)=>{handlecheckbox(e)}}>
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
                        <div className={`${s=="p"?"hidden":"flex"}`}>
                        <Menubar   sx={{
                            "& .MuiPaper-root": {
                            backgroundColor: "transparent",
                            boxShadow: "none"
                            }
                        }}>
                            <MenuRoot  sx={{ backgroundColor: "red" }} >
                                <MenuTrigger  sx={{ backgroundColor: "white" }}>
                                    <span className="material-symbols-outlined text-outline bg-transparent relative ">
                                        drag_indicator
                                    </span>
                                </MenuTrigger>
                                <MenuPortal>
                                <MenuPositioner sideOffset={4} alignOffset={-2}>
                                    <MenuPopup>
                                    <MenuItem onClick={()=>{dilogubdate(details)}}><EditNoteIcon className="text-blue-500"></EditNoteIcon> Edit</MenuItem>
                                    <MenuItem onClick={()=>{dilogdelete(details)}}><DeleteIcon className="text-red-400 relative right-0.5"></DeleteIcon> Delete </MenuItem>
                                    </MenuPopup>
                                </MenuPositioner>
                                </MenuPortal>
                            </MenuRoot>
                        </Menubar>
                        </div>
                </div>
    </div>
    )
    }
