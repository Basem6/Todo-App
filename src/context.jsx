import { createContext } from "react";
export const TasksContext = createContext([])
export const TaskdetailsContext = createContext({title: "", pharse: "This is a new task.", Priority: "" , date: "" , status: "nochecked"})