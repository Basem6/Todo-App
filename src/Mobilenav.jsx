import { NavLink } from "react-router-dom";
export function NavMob(){
        return(
                <div className="button-containe flex bg-gray-200 z-20 justify-between p-2 px-3">
                        <span>
                                <NavLink end to="/" className="w-fit">
                                {({ isActive }) => (
                                <span
                                className={`flex  gap-2.5 items-center text-slate-600 dark:text-slate-400  transition-all duration-200 ease-in-out ${
                                        isActive ? "active_t" : ""
                                }`}
                                >
                                <span className={`material-symbols-outlined ${isActive ? 'text-indigo-600 dark:text-indigo-400': ''}`}>list_alt</span>
                                <span className="text-xs font-thin Inter">All Tasks</span>
                                </span>
                                )}
                                </NavLink>
                        </span>
                        <span>
                                <NavLink to="/complete" className="w-fit">
                                {({ isActive }) => (
                                <span
                                className={` flex  gap-2.5 items-center text-slate-600 dark:text-slate-400 hover:text-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-xl transition-all duration-200 ease-in-out ${
                                        isActive ? "active_t" : ""
                                }`}
                                >
                                <span className={`material-symbols-outlined ${isActive ? 'text-indigo-600 dark:text-indigo-400': ''}`}>check_circle</span>
                                <span className="text-xs font-thin Inter">Completed</span>
                                </span>
                                )}
                                </NavLink>
                        </span>
                        <span>
                                <NavLink to="/pending" className="w-fit">
                                {({ isActive }) => (
                                <span
                                className={` flex  gap-2.5 items-center text-slate-600 dark:text-slate-400 hover:text-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-xl transition-all duration-200 ease-in-out ${
                                        isActive ? "active_t" : ""
                                }`}
                                >
                                <span className={`material-symbols-outlined ${isActive ? 'text-indigo-600 dark:text-indigo-400': ''}`}>pending_actions</span>
                                <span className="text-xs font-thin Inter">Pending</span>
                                </span>
                                )}
                                </NavLink>
                        </span>
                </div>
        )
}