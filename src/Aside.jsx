import { NavLink } from "react-router-dom";
export function Aside(){
    return (
            <aside className="hidden lg:flex  h-screen w-64 fixed left-0 top-0 bg-slate-100 dark:bg-slate-900 flex-col p-4 gap-2 z-40 transition-all duration-200 ease-in-out">
                <div className="px-3 py-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                        <span className="material-symbols-outlined text-white">cloud_queue</span>
                    </div>
                    <div>
                        <h2 className="text-lg font-black text-slate-900 dark:text-slate-50 leading-tight">Workspace</h2>
                        <p className="text-[10px] uppercase tracking-widest font-bold text-indigo-600 dark:text-indigo-400">Premium Plan</p>
                    </div>
                </div>
                <nav className="flex gap-2 flex-col">
                    <NavLink end to="/">
                        {({ isActive }) => (
                            <div
                            className={`link flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:text-slate-900  hover:bg-slate-200 dark:hover:bg-slate-800 rounded-xl transition-all duration-200 ease-in-out ${
                                isActive ? "active" : ""
                            }`}
                            >
                            <span
                                className={`material-symbols-outlined ${
                                isActive ? "text-indigo-600 dark:text-indigo-400" : ""
                                }`}
                            >
                                list_alt
                            </span>
                            <span className="text-sm font-medium Inter">All Tasks</span>
                            </div>
                        )}
                    </NavLink>
                    <NavLink to="/complete">
                        {({ isActive }) => (
                            <div
                            className={`link flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:text-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-xl transition-all duration-200 ease-in-out ${
                                isActive ? "active" : ""
                            }`}
                            >
                            <span
                                className={`material-symbols-outlined ${
                                isActive ? "text-indigo-600 dark:text-indigo-400" : ""
                                }`}
                            >
                                check_circle
                            </span>
                            <span className="text-sm font-medium Inter">Completed</span>
                            </div>
                        )}
                    </NavLink>
                    <NavLink to="/pending" >
                        {({ isActive }) => (
                            <div
                            className={`link flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:text-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-xl transition-all duration-200 ease-in-out ${
                                isActive ? "active" : ""
                            }`}
                            >
                            <span
                                className={`material-symbols-outlined ${
                                isActive ? "text-indigo-600 dark:text-indigo-400" : ""
                                }`}
                            >
                                pending_actions
                            </span>
                            <span className="text-sm font-medium Inter">Pending</span>
                            </div>
                        )}
                    </NavLink>
                </nav>
                <button className="mt-auto flex items-center justify-center gap-2 px-4 py-3 bg-slate-200/50 dark:bg-slate-800/50 border-2 border-dashed border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 rounded-xl hover:bg-slate-200 transition-colors">
                    <span className="material-symbols-outlined text-sm">add</span>
                    <span className="text-xs font-bold uppercase tracking-wider">New Category</span>
                </button>
            </aside>
    )
}