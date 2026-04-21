import { Task } from "./Task.jsx";
import { Footer } from "./Footer.jsx";
import { Header } from "./Header.jsx";
import { useState , useContext , useEffect , useMemo } from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TasksContext  } from "./context.jsx";
import { useToast } from "./ToastContext.jsx"
export function Contente(){
    const showAlert = useToast()
    const {tasks, setTasks} = useContext(TasksContext);
    const [Todo , seTodo] = useState(null);
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [taskup , setup] = useState({titlel:"" , pharse:""});
    let [task , setTask] = useState({title: "", pharse: "This is a new task.", Priority: "" , date: "" , status: "nochecked"});
    function handleaddtask(e){
        setTask({...task, title: e.target.value , pharse: "This is a new task." , Priority: task.Priority, date: task.date, status: task.status});
    }
    function handleclickbutton(){
        if(task.title.trim() !== "" && task.Priority.trim() !== "" && task.date.trim() !== ""){
            let newe = {title: task.title, pharse: task.pharse, Priority: task.Priority, date: task.date, status: "nochecked"};
            let ubdatedtasks = [...tasks, newe]
            setTasks(ubdatedtasks)
            showAlert("success","Added Task Successfully")
            localStorage.setItem("tasks", JSON.stringify(ubdatedtasks));
            setTask({title: "", pharse: "", Priority: "", date: "", status: "nochecked"})
        }else{
            showAlert("warning","Please fill all inputs")
        }
    }
    function handleoption(e){
        setTask({...task, Priority: e.target.value})
    }
    function handledate(e){
            setTask({...task, date: e.target.value})
    }
    
    // delete dilog
    function handledelet_dilog(task_path){
        seTodo(task_path)
        setOpen(true)
    }
    function handleClose(){
        setOpen(false)
    }
    function handleagree(){
        handleClose()
        let ubdatedtasks = tasks.filter((e,index)=>{return index!=tasks.indexOf(Todo)})
        setTasks(ubdatedtasks)
        showAlert("success","Task is deleted Sucessfuly")
        localStorage.setItem("tasks", JSON.stringify(ubdatedtasks));
    }

    // ubdate dilog
    function handleubdate_dilog(task_path){
        seTodo(task_path)
        setup({titlel:task_path.title, pharse:task_path.pharse})
        setOpen2(true);   
    }
    const handleClose2 = () => {
            setOpen2(false);
    };
    function handleedit_task(){
        handleClose2()
        let ubdatedtasks = tasks.map((task,index)=>{
                if(tasks.indexOf(Todo)==index){
                    task.title=taskup.titlel
                    task.pharse=taskup.pharse
                    return task
                }else{
                    return task
                }
        })
        setTasks(ubdatedtasks)
        showAlert("success","Task is ubdated Sucessfuly")
        localStorage.setItem("tasks", JSON.stringify(ubdatedtasks));
    }
 // get data from localstorge
    useEffect(() => {
        let storedTasks = localStorage.getItem("tasks");
        if (storedTasks) {
            setTasks(JSON.parse(storedTasks));
        }
    }, []);
    //cashing with useMemo
    let array = useMemo(()=>{
        return tasks.map((item,index) => {
                                return (
                                    <Task details={tasks[index]} key={index} s="a" dilogdelete={handledelet_dilog}  dilogubdate={handleubdate_dilog}/>
                                );
            })
    },[tasks])
    return(
        <>
            <main className="flex-1 ml-64 min-h-screen flex flex-col ">
                    <Header/>
                    <section className="p-10  w-full mx-auto flex flex-col gap-8">
                        <div className="bg-surface-container-lowest p-8 rounded-2xl border border-surface-container/50">
                        <h2 className="text-lg font-bold mb-6">Quick Add Task</h2>
                        <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1 flex items-center bg-surface-container-low rounded-xl px-4 focus-within:ring-2 focus-within:ring-primary/10 transition-all">
                        <span className="material-symbols-outlined text-outline mr-2">add_task</span>
                        <input className="bg-transparent border-none w-full py-4 text-sm focus:ring-0 placeholder:text-outline" placeholder="What's your next move?" type="text" value={task.title} onChange={(e)=>{handleaddtask(e)}}/>
                        </div>
                        <div className="flex gap-4">
                        <div className="relative min-w-35">
                        <Box sx={{ minWidth: 120,borderBlock: '0px solid'  }} className="appearance-none w-full bg-surface-container-low border-none outline-none ">
                            <FormControl fullWidth className="border-none outline-none rounded-md "   >
                                <InputLabel id="demo-simple-select-label " className="outline-none">Priority</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={task.Priority}
                                label="Priority"
                                onChange={(e)=>{handleoption(e)}}
                                >
                                <MenuItem value={"Low Priority"}>Low Priority</MenuItem>
                                <MenuItem value={"Medium Priority"}>Medium Priority</MenuItem>
                                <MenuItem value={"High Priority"}>High Priority</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        </div>
                        <div className="flex items-center bg-surface-container-low rounded-xl px-4 min-w-40">
                        <span className="material-symbols-outlined text-outline text-lg mr-2">calendar_month</span>
                        <input className="bg-transparent border-none w-full py-4 text-xs font-semibold focus:ring-0 placeholder:text-outline" placeholder="Set Date" type="text" value={task.date} onChange={(e)=>{handledate(e)}}/>
                        </div>
                        <button className="bg-primary text-on-primary px-8 rounded-xl font-bold text-sm hover:shadow-lg hover:shadow-primary/20 transition-all" onClick={(e)=>{handleclickbutton(e)}}>Add Task</button>
                        </div>
                        </div>
                        </div>
                        <div className="flex flex-col gap-6">
                        <div className="flex items-center justify-between">
                        <div>
                        <h3 className="text-2xl font-bold tracking-tight">Today's Focus</h3>
                        <p className="text-sm text-on-surface-variant mt-1">You have {tasks.length} tasks to complete today.</p>
                        </div>
                        <div className="flex items-center gap-3">
                        <div className="flex bg-surface-container-low p-1 rounded-xl">
                        <button className="size-8 flex items-center justify-center rounded-lg bg-surface-container-lowest shadow-sm text-primary">
                        <span className="material-symbols-outlined text-xl">view_list</span>
                        </button>
                        <button className="size-8 flex items-center justify-center rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors">
                        <span className="material-symbols-outlined text-xl">grid_view</span>
                        </button>
                        </div>
                        <div className="relative">
                        <button className="flex items-center gap-2 bg-surface-container-low px-4 py-2.5 rounded-xl text-xs font-bold text-on-surface-variant hover:bg-surface-container-high transition-colors">
                        <span className="material-symbols-outlined text-lg">filter_list</span>
                        Filter
                        </button>
                        </div>
                        </div>
                        </div>
                        <div className="grid gap-4 tasks_place">
                            {array}
                        </div>
                        </div>
                        <div className="mt-12">
                        <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-bold">Category: Study</h3>
                        </div>
                        <div className="bg-surface-container/30 border-2 border-dashed border-outline-variant/30 rounded-2xl p-20 flex flex-col items-center justify-center text-center">
                        <div className="size-24 mb-6 relative">
                        <div className="absolute inset-0 bg-secondary-container/20 rounded-full blur-2xl"></div>
                        <div className="relative size-full flex items-center justify-center text-secondary">
                        <span
                        className="material-symbols-outlined text-6xl"
                        
                        >
                        auto_stories
                        </span>
                        </div>
                        </div>
                        <h4 className="text-xl font-bold mb-2">No study tasks yet</h4>
                        <p className="text-on-surface-variant text-sm max-w-xs mb-8">
                        Stay ahead of your learning curve. Add your courses, assignments or reading lists here.
                        </p>
                        <button className="flex items-center gap-2 bg-surface-container-lowest border border-surface-container-highest px-6 py-3 rounded-xl text-sm font-bold text-on-surface hover:bg-surface-container-low transition-all">
                        <span className="material-symbols-outlined text-lg">add</span>
                        New Study Session
                        </button>
                        </div>
                        </div>
                    </section>
                    <Footer/>
            </main>
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
                    <Button onClick={()=>{handleagree()}}>Agree</Button>
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
                                value={taskup.titlel}
                                variant="standard"
                                />
                                <TextField
                                onChange={(e)=>{setup({...taskup,pharse:e.target.value})}}
                                className="d"
                                id="details"
                                name="details"
                                margin="dense"
                                autoFocus="true"
                                value={taskup.pharse}
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
        </>
    )
}