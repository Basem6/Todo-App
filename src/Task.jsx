import { TasksContext } from "./context.js";
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { useContext , useState } from "react";
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
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
export function Task({id , s}){
    const {tasks , setTasks} = useContext(TasksContext);
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [taskup , setup] = useState({"titlel":tasks[id].title , "pharse":tasks[id].pharse})
        const handleClickOpen2 = () => {
            setOpen2(true);
        };
        const handleClose2 = () => {
            setOpen2(false);
        };
    const handleClickOpen = () => {
        setOpen(true);
    }; 
    const handleClose = () => {
        setOpen(false);
    };
    
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
    function handleedit(){
        handleClickOpen2()
    }
    function handledelete(){
        handleClickOpen()
    }
    const handleedit_task = () => {
    handleClose2()
    let ubdatedtasks = tasks.map((task,index)=>{
            if(id==index){
                task.title=taskup.titlel
                task.pharse=taskup.pharse
                return task
            }else{
                return task
            }
    })
    setTasks(ubdatedtasks)
    localStorage.setItem("tasks", JSON.stringify(ubdatedtasks));
    }
    function handleagree(){
        handleClose()
        let ubdatedtasks = tasks.filter((e,index)=>{return index!=id})
        setTasks(ubdatedtasks)
        localStorage.setItem("tasks", JSON.stringify(ubdatedtasks));
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
                        <Menubar   sx={{
                            "& .MuiPaper-root": {
                            backgroundColor: "transparent",
                            boxShadow: "none"
                            }
                        }}>
                            <MenuRoot sx={{ backgroundColor: "red" }}>
                                <MenuTrigger sx={{ backgroundColor: "white" }}>
                                    <span className="material-symbols-outlined text-outline bg-transparent relative ">
                                        drag_indicator
                                    </span>
                                </MenuTrigger>
                                <MenuPortal>
                                <MenuPositioner sideOffset={4} alignOffset={-2}>
                                    <MenuPopup>
                                    <MenuItem onClick={(e)=>{handleedit(e)}}><EditNoteIcon className="text-blue-500"></EditNoteIcon> Edit</MenuItem>
                                    <MenuItem onClick={(e)=>{handledelete(e)}}><DeleteIcon className="text-red-400 relative right-0.5"></DeleteIcon> Delete </MenuItem>
                                    </MenuPopup>
                                </MenuPositioner>
                                </MenuPortal>
                            </MenuRoot>
                        </Menubar>
                </div>
                <Dialog
                    open={open}
                    keepMounted
                    disableScrollLock
                    onClose={handleClose}
                    aria-describedby="alert-dialog-slide-description"
                    role="alertdialog"
                >
                    <DialogTitle>{""}</DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                    
                    Are you sure you want to delete this task?<br></br>
                    This action cannot be undone.
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                        Disagree
                    </Button>
                    <Button onClick={(e)=>{handleagree(e)}}>Agree</Button>
                    </DialogActions>
                </Dialog>
                <Dialog open={open2}
                onClose={handleClose2}
                disableScrollLock 
                keepMounted>
                <DialogTitle>Edit</DialogTitle>
                <DialogContent>
                <DialogContentText>    
                </DialogContentText>
                <form  id="subscription-form" >
                    <TextField  
                    onChange={(e)=>{setup({...taskup,titlel:e.target.value})}}
                    className="n"  
                    id="name"
                    name="email"
                    margin="dense"
                    label="Title Task"
                    fullWidth
                    autoFocus="true"
                    defaultValue={taskup.titlel}
                    variant="standard"
                    />
                    <TextField
                    onChange={(e)=>{setup({...taskup,pharse:e.target.value})}}
                    className="d"
                    id="details"
                    name="details"
                    margin="dense"
                    autoFocus="true"
                    defaultValue={taskup.pharse}
                    label="Details Task"
                    fullWidth
                    variant="standard"
                    />
                </form>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose2}>Cancel</Button>
                <Button onClick={handleedit_task} >
                    Edit
                </Button>
                </DialogActions>
                </Dialog>
    </div>
    )
    }
