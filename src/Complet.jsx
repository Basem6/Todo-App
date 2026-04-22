import { Header } from "./Header"
import { Task } from "./Task"
import { useEffect} from "react"
import { Task_complete } from "./Task_complete";
import {useReducetodo } from "./Mainreducer.jsx"
export function Complete(){
    const { todos , dispatch} = useReducetodo();
    useEffect(() => {
        dispatch({
                type:"get",
            }) 
    }, []);
    return(
        <main className="flex-1 flex flex-col min-h-screen relative bg-background ml-64">
            <Header/>
            <div className="flex-1 px-11 py-8 max-w-full w-full">
            <div className="mb-12">
            <h2 className="text-4xl font-bold tracking-tight text-on-background mb-2">Completed Tasks</h2>
            <p className="text-on-surface-variant max-w-lg">Everything you've accomplished so far. A legacy of productivity and focus.</p>
            </div>
            <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-4 flex flex-col gap-6">
            <div className="bg-surface-container-lowest p-6 rounded-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4">Productivity Pulse</p>
            <div className="flex items-end gap-2 mb-2">
            <span className="text-5xl font-black text-on-background tracking-tighter">{todos.filter(t => t.status === "checked").length}</span>
            <span className="text-sm font-semibold text-tertiary-fixed-dim mb-2">Tasks Done</span>
            </div>
            <p className="text-sm text-on-surface-variant leading-relaxed">+12% from last week. You're maintaining a strong momentum.</p>
            </div>
            <div className="bg-primary p-6 rounded-2xl text-on-primary">
            <span className="material-symbols-outlined mb-4 opacity-80" data-icon="insights">insights</span>
            <p className="text-lg font-bold mb-1">Peak Performance</p>
            <p className="text-sm opacity-80">You finish most tasks on Tuesdays between 10:00 AM and 1:00 PM.</p>
            </div>
            </div>
            
            <div className="col-span-12 md:col-span-8 bg-surface-container-lowest rounded-2xl overflow-hidden">
            <div className="p-6 flex items-center justify-between border-b border-surface-container-low">
            <h3 className="font-bold text-lg">History Archive</h3>
            <div className="flex gap-2">
            <button className="px-3 py-1.5 text-xs font-semibold bg-surface-container-high rounded-lg text-on-surface hover:bg-surface-container-highest transition-colors">Clear All</button>
            <button className="px-3 py-1.5 text-xs font-semibold text-on-surface-variant hover:bg-surface-container-low rounded-lg transition-colors">Export CSV</button>
            </div>
            </div>
            <div className="divide-y divide-surface-container-low">
            {todos.map((item,index)=>{
                if(item.status=="checked"){
                    return(
                        <Task_complete id={index} key={index+1} />
                    )
                }
            })}
            </div>
            <div className="p-6 text-center border-t border-surface-container-low">
            <button className="text-sm font-semibold text-primary hover:text-primary-dim transition-colors">Load Older History</button>
            </div>
            </div>
            
            <div className="col-span-12 bg-surface-container-low rounded-2xl p-8 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
            <h3 className="text-2xl font-extrabold tracking-tight mb-4 text-on-background">Productivity Visualized</h3>
            <p className="text-on-surface-variant mb-6 max-w-xl">You've successfully closed more tasks this month than the last 3 months combined. This consistency is the key to mastering your creative output.</p>
            <div className="flex gap-4">
            <button className="bg-surface-container-lowest px-6 py-3 rounded-2xl font-bold text-sm text-on-surface shadow-sm hover:bg-white transition-all">View Report</button>
            <button className="text-sm font-bold text-primary px-4 py-3">Milestones</button>
            </div>
            </div>
            <div className="w-full md:w-64 aspect-square bg-surface-container-highest rounded-2xl overflow-hidden relative">
            <img alt="Data visualization" className="w-full h-full object-cover grayscale opacity-80" data-alt="Abstract minimalist line graph showing an upward trend in soft blue and grey tones on a clean white background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7mnf9QzulAkevwQf-P6_KxgQn4V-MEcGPypnMfMEzOSGeROC9wkHNr_7cGl9UFVXUnq17dzKe7nH6pBP4fLfP-U__95q76vmyNwEqn6un8Gluyg9dSBNEnvUjr3GcoR8Yyn0QM5XtT5VSu7VV84liozr84fo-DMm136UQ61gop40atOYAjv3btbaYZeEZzJX9sVEr1YtlAe7I9asxnArFAtJrk_MDaxTMj3YdTqfurREWQ9wkY-MofuESIVSGkRTsle4TyTJpxm8a"/>
            <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-xl">
            <span className="text-xs font-bold text-primary block text-center">CURRENT STREAK</span>
            <span className="text-3xl font-black block text-center">14 Days</span>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
        </main>
    )
}