import { createContext , useState , useContext } from "react";
const TasksContext = createContext([]);
export function Tasksprovide({children}){
    let array_tasks=[
                { title: "Weekly Sync with Engineers", pharse: "Review development tickets for the upcoming sprint cycle.", Priority: "High Priority", date: "10:30 AM", status: "nochecked" ,statue_task: ""},
                { title: "Design System Review", pharse: "Update color tokens and typography hierarchy for Q3.", Priority: "Low Priority", date: "11:00 AM", status: "nochecked", statue_task: "" },
                { title: "Client Onboarding Call", pharse: "Introduction to the project scope and key milestones.", Priority: "Medium Priority", date: "2:00 PM", status: "nochecked" ,statue_task: "" },
                { title: "Invoice Processing", pharse: "Review and approve monthly service invoices for payment.", Priority: "Low Priority", date: "3:30 PM", status: "nochecked", statue_task: "" },
    ]
    const [tasks, setTasks] = useState(array_tasks);
    return (
            <TasksContext.Provider value={{ tasks, setTasks }}>
                {children}
            </TasksContext.Provider>
    )
}
export const useTasks = ()=>{
    return useContext(TasksContext)
}

