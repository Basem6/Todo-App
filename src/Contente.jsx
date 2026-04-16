import { Task } from "./Task.jsx";
import { Footer } from "./Footer.jsx";
import { Header } from "./Header.jsx";
import { useState } from "react";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
export function Contente(){
    let array_tasks=[
        <Task title="Weekly Sync with Engineers" pharse="Review development tickets for the upcoming sprint cycle." Priority="High Priority" date="10:30 AM" status="nochecked"/>,
        <Task title="Design System Review" pharse="Update color tokens and typography hierarchy for Q3." Priority="Low Priority" date="11:00 AM" status="nochecked"/>,
        <Task title="Client Onboarding Call" pharse="Introduction to the project scope and key milestones." Priority="Medium Priority" date="2:00 PM" status="nochecked"/>,
        <Task title="Invoice Processing" pharse="Review and approve monthly service invoices for payment." Priority="Low Priority" date="3:30 PM" status="nochecked"/>,
    ]
    let [task , setTask] = useState({title: "", pharse: "This is a new task.", Priority: "" , date: "" , status: "nochecked"})
    let [tasks , setTasks] = useState(array_tasks)
    function handleaddtask(e){
        setTask({...task, title: e.target.value , pharse: "This is a new task." , Priority: task.Priority, date: task.date, status: task.status})
    }
    function handleclickbutton(){
        if(task.title.trim() !== "" && task.Priority.trim() !== "" && task.date.trim() !== ""){
            let newe = <Task title={task.title} pharse={task.pharse} Priority={task.Priority} date={task.date} status="nochecked"/>
            setTasks([...tasks, newe])
            document.querySelector(".alert_success").style.cssText= " opacity: 1;";
            setTimeout(() => {
                document.querySelector(".alert_success").style.cssText= " opacity: 0;";
            },2200)
            setTask({title: "", pharse: "", Priority: "", date: "", status: "nochecked"})
        }else{
            document.querySelector(".alert").style.cssText= " opacity: 1;";
            setTimeout(() => {
                document.querySelector(".alert").style.cssText= " opacity: 0;";
            },3000)
            console.log("Please fill in all fields before adding a task.");
        }
    }
    function handleoption(e){
        setTask({...task, Priority: e.target.value})
    }
    function handledate(e){
            setTask({...task, date: e.target.value})
    }
    return(
        <>
            <main className="flex-1 ml-64 min-h-screen flex flex-col ">
                    <Stack sx={{ width: '27%' ,position: 'fixed', top: "10%", left: "50%" , zIndex: 1000,transform: 'translateX(-50%)',borderRadius: 8 , transition: 'all 0.3s ease' ,opacity: 0}} spacing={2} className="alert">
                    <Alert severity="warning">Please fill in all fields before adding a task.</Alert>
                    </Stack>
                    <Stack sx={{ width: '27%' ,position: 'fixed', top: "10%", left: "50%" , zIndex: 1000,transform: 'translateX(-50%)',borderRadius: 8 , transition: 'all 0.3s ease' ,opacity: 0}} spacing={2} className="alert_success">
                    <Alert severity="success">Task added successfully!</Alert>
                    </Stack>
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
                        <Box sx={{ minWidth: 120 }} className="appearance-none w-full bg-surface-container-low border-none ">
                            <FormControl fullWidth className="border-none">
                                <InputLabel id="demo-simple-select-label">Priority</InputLabel>
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
                        <div className="flex items-center bg-surface-container-low rounded-xl px-4 min-w-[160px]">
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
                            {tasks.map((item,index) => {
                                return {
                                    ...item,
                                    key: index + 1
                                    
                                    };
                            })}
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
                        style={{ fontVariationSettings: "'wght' 200" }}
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
        </>
    )
}