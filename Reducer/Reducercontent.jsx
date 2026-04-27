export default function reducer(currentstate , action){
    switch(action.type){
        case "added":{
                    if(action.payload.inputtitle.trim() !== "" && action.payload.inputPriority.trim() !== "" && action.payload.inputdate.trim() !== ""){
                        let newe = {title: action.payload.inputtitle , Priority: action.payload.inputPriority, date: action.payload.inputdate , status:action.payload.statue , pharse:"This is a new task."};
                        let ubdatedtasks = [...currentstate, newe]
                        localStorage.setItem("tasks", JSON.stringify(ubdatedtasks));
                        return ubdatedtasks ;
                    }
                    return currentstate
        } 
        case "deleted":{
            let ubdatedtasks = currentstate.filter((e,index)=>{return index!=currentstate.indexOf(action.payload.Todo)})
            localStorage.setItem("tasks", JSON.stringify(ubdatedtasks));
            return ubdatedtasks;
        }  
        case "ubdated":{
                    let ubdatedtasks = currentstate.map((task,index)=>{
                            if(currentstate.indexOf(action.payload.Todo)==index){
                                task.title=action.payload.titleinput
                                task.pharse=action.payload.pharseinput
                                task.ubdate = Date.now()
                                return task
                            }else{
                                return task
                            }
                    })
                    // Filter out ubdate flag before saving to localStorage
                    let tasksToSave = ubdatedtasks.map(task => {
                        const {ubdate, ...taskWithoutFlag} = task
                        return taskWithoutFlag
                    })
                    localStorage.setItem("tasks", JSON.stringify(tasksToSave));
                    return ubdatedtasks
        }
        case "togglecomplete":{
                if(action.payload.task.status=="checked"){
                    let newarr = currentstate.map((item,index)=>{
                    if(index==currentstate.indexOf(action.payload.task)){
                        return {...item, status: "nochecked"}
                    }
                    return item;
                    });
                    localStorage.setItem("tasks", JSON.stringify(newarr));
                    return newarr
                }
                else{
                    let newarr = currentstate.map((item,index)=>{
                    if(index==currentstate.indexOf(action.payload.task)){
                                return {...item, status: "checked"}
                                }
                                return item;
                            });
                    localStorage.setItem("tasks", JSON.stringify(newarr));
                    return newarr
                }
        }
        case "get":{
                let storedTasks = localStorage.getItem("tasks");
                if (storedTasks) {
                    return (JSON.parse(storedTasks));
                }
                return currentstate
        }
        default:
            return currentstate;  
    }
}