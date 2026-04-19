import './App.css'
import { Aside } from './Aside.jsx'
import { Contente } from './Contente.jsx'
import {Complete} from './Complet.jsx'
import {Pending} from './Pending.jsx'
import { TasksContext } from './context.js'
import {  useState } from 'react'
import { Task } from './Task.jsx'
import { TaskdetailsContext } from './context.js'
import { Routes, Route } from 'react-router-dom'
function App() {
  let array_tasks=[
          { title: "Weekly Sync with Engineers", pharse: "Review development tickets for the upcoming sprint cycle.", Priority: "High Priority", date: "10:30 AM", status: "nochecked" ,statue_task: ""},
          { title: "Design System Review", pharse: "Update color tokens and typography hierarchy for Q3.", Priority: "Low Priority", date: "11:00 AM", status: "nochecked", statue_task: "" },
          { title: "Client Onboarding Call", pharse: "Introduction to the project scope and key milestones.", Priority: "Medium Priority", date: "2:00 PM", status: "nochecked" ,statue_task: "" },
          { title: "Invoice Processing", pharse: "Review and approve monthly service invoices for payment.", Priority: "Low Priority", date: "3:30 PM", status: "nochecked", statue_task: "" },
  ]
  const [tasks, setTasks] = useState(array_tasks);
  const [task, setTask] = useState({title: "", pharse: "This is a new task.", Priority: "" , date: "" , status: "nochecked"})
  // localStorage.clear()
  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      <TaskdetailsContext.Provider value={{task, setTask}}>
        <Aside></Aside>
        <Routes>
          <Route path="/" element={<Contente />} />
          <Route path="/complete" element={<Complete />} />
          <Route path="/pending" element={<Pending />} />
          </Routes>
        </TaskdetailsContext.Provider>
    </TasksContext.Provider> 
  )
}

export default App
