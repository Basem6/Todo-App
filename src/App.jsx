import './App.css'
import { Aside } from './Aside.jsx'
import { Contente } from './Contente.jsx'
import {Complete} from './Complet.jsx'
import {Pending} from './Pending.jsx'
import {  useState } from 'react'
import  NotFound  from './Notfoundpage.jsx'
import { Task } from './Task.jsx'
import {Tasksprovide} from './Tasksprovider.jsx'
import {ToastContext} from './ToastContext.jsx'
import { TaskdetailsContext  } from './context.jsx'
import { Routes, Route } from 'react-router-dom'
function App() {
  const [task, setTask] = useState({title: "", pharse: "This is a new task.", Priority: "" , date: "" , status: "nochecked"})
  // localStorage.clear()
  return (
    <ToastContext>
        <Tasksprovide>
          <TaskdetailsContext.Provider value={{task, setTask}}>
            <Routes>
              <Route path="/" element={<><Aside/> <Contente/></>} />
              <Route path="/complete" element={<><Aside/><Complete /></>} />
              <Route path="/pending" element={<><Aside/><Pending /></>} />
              <Route path="*" element={<NotFound></NotFound>} />
            </Routes>
          </TaskdetailsContext.Provider>
      </Tasksprovide>
    </ToastContext> 
  )
}

export default App
