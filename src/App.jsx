import './App.css'
import { Aside } from './Aside.jsx'
import { Contente } from './Contente.jsx'
import {Complete} from './Complet.jsx'
import {Pending} from './Pending.jsx'
import  NotFound  from './Notfoundpage.jsx'
import { Task } from './Task.jsx'
import {Reducertodo} from './Mainreducer.jsx'
import {ToastContext} from './ToastContext.jsx'
import { Routes, Route } from 'react-router-dom'
function App() {
  // localStorage.clear()
  return (
    <ToastContext>
      <Reducertodo>
          <Routes>
              <Route path="/" element={<><Aside/> <Contente/></>} />
              <Route path="/complete" element={<><Aside/><Complete /></>} />
              <Route path="/pending" element={<><Aside/><Pending /></>} />
              <Route path="*" element={<NotFound></NotFound>} />
          </Routes>
      </Reducertodo>
    </ToastContext> 
  )
}
export default App
