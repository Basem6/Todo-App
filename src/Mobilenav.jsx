import { NavLink } from "react-router-dom";
export function NavMob(){
    return(
        <div className="button-containe flex bg-white z-20 justify-between">
                <NavLink className={({ isActive }) => `link flex px-4 py-3 gap-2.5 items-center  text-slate-600  dark:text-slate-400 hover:text-slate-900 transition-all duration-200 ease-in-out ${isActive ? 'active_t' : ''}`} end to="/">
                                        <span className="material-symbols-outlined ">list_alt</span>
                                        <span className="text-xs font-thin Inter ">All Tasks</span>
                </NavLink>
                <NavLink className={({ isActive }) => `link flex  items-center gap-2.5 px-4 py-3 text-slate-600 dark:text-slate-400 hover:text-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-xl transition-all duration-200 ease-in-out ${isActive ? 'active_t' : ''}`} to="/complete">
                        <span className="material-symbols-outlined ">check_circle</span>
                        <span className="text-xs font-thin  Inter">Completed</span>
                </NavLink>
                <NavLink className={({ isActive }) => `link flex  items-center gap-2.5 px-4 py-3 text-slate-600 dark:text-slate-400 hover:text-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-xl transition-all duration-200 ease-in-out ${isActive ? 'active_t' : ''}`} to="/pending">
                        <span className="material-symbols-outlined">pending_actions</span>
                        <span className="text-xs font-thin  Inter">Pending</span>
                </NavLink>
        </div>
    )
}