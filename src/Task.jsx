import {useToast} from "./ToastContext.jsx"
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';
import {useReducetodo } from "./Mainreducer.jsx"
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
import { useState , useEffect } from "react";
export function Task({details , s , dilogdelete , dilogubdate }){
    const [ubdated , setubdated] = useState(false)
    const {dispatch} = useReducetodo()
    const {showAlert} = useToast();
    function check(){ 
            if(details.Priority=="Low Priority"){
                return { textColor: "text-on-tertiary", bgColor: "bg-tertiary-container" }
            }if(details.Priority=="Medium Priority"){
                return { textColor: "color-on-secondary-fixed-variant", bgColor: "bg-secondary-container" }
            }if(details.Priority=="High Priority"){
                return { textColor: "text-on-error-container", bgColor: "bg-error-container" }
            }
    }
    useEffect(() => {
        if (details.ubdate) {
            setubdated(true);
            const timer = setTimeout(() => {
            setubdated(false);
            }, 900);
            return () => clearTimeout(timer);
        }
        }, [details.ubdate]);
    function  handlecheckbox(e) {
        dispatch({type:"togglecomplete",payload:{task:details}})
        if(details.status=="checked"){
        e.target.className="material-symbols-outlined text-primary text-xs opacity-0 group-hover:opacity-100"
        e.target.parentElement.className="flex items-center justify-center size-6 transition-colors  rounded-lg border-2 border-primary-fixed-dim hover:bg-primary-fixed-dim group"
        showAlert("success" , "Task is Not Completed Successfuly")
        }else{    
        e.target.className="material-symbols-outlined text-on-primary text-xs"
        e.target.parentElement.className="flex items-center justify-center size-6 rounded-lg bg-primary border-2 border-primary transition-colors"
        showAlert("success" , "Task is Completed Successfuly")
        }   
    }  
    let statue_task = details.status === "checked" ? "done" : "calendar_today";
    let date_task = details.status === "checked" ? "Completed" : `${details.date}`;
    let { textColor, bgColor } = check()
    return(
        <div className={`task-card min-w-full flex lg:flex-row  flex-col lg:items-center lg:gap-0.5 items-start gap-4 justify-between lg:p-6  p-4 rounded-2xl wrap-anywhere border border-transparent transition-all cursor-pointer duration-500 ${ubdated ?"bg-[#D9F99D]":"bg-surface-container-lowest"}` } >
                <div className={`flex items-center lg:gap-6  gap-1.5  `} >
                        <div  className={`${s=="p"?"hidden":"flex"} items-center justify-center size-6 rounded-lg border-2 border-primary-fixed-dim hover:bg-primary-fixed-dim transition-colors group ${details.status === "checked" ? "flex items-center justify-center size-6 rounded-lg bg-primary border-2 border-primary transition-colors border-none" : ""}`} id="r" onClick={(e)=>{handlecheckbox(e)}}>
                            <span className={`${details.status === "checked" ? "material-symbols-outlined text-on-primary text-xs" : "material-symbols-outlined text-primary text-xs opacity-0 group-hover:opacity-100"}`}>check</span>
                        </div>
                        <div>
                            <h4 className="text-sm font-semibold text-on-surface">{details.title}</h4>
                            <p className="text-xs text-on-surface-variant mt-1">{details.pharse}</p>
                        </div>
                </div>
                <div className="flex items-center justify-around">
                        <div className="flex items-center gap-2 text-on-surface-variant">
                            <span className="material-symbols-outlined text-lg "> {statue_task}</span>
                            <span className="text-sm whitespace-nowrap min-w-[80px] max-w-[80px]">{date_task}</span>
                        </div>       
                        <span className={`px-3 py-1.5  rounded-lg text-[10px] font-bold uppercase tracking-wider  ${textColor}   ${bgColor} whitespace-nowrap`}>{details.Priority}</span>
                        <div className={` ${s=="p"?"hidden":"flex"}`}>
                        <Menubar   sx={{
                            "& .MuiPaper-root": {
                            backgroundColor: "transparent",
                            boxShadow: "none"
                            }
                        }}>
                            <MenuRoot  sx={{ backgroundColor: "red" }} >
                                <MenuTrigger  sx={{ backgroundColor:`${ubdated ?"#D9F99D":"white"}` , transition: "all 500ms "}} >
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
