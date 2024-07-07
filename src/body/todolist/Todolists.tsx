import {Task, Todolist} from "./components/todolist/Todolist.tsx";
import {useState} from "react";
const tasks : Task[] = [
    {id: 1, task: 'amoga', isDone: true},
    {id: 2, task: 'aboba', isDone: false},
    {id: 3, task: 'amoma', isDone: false},
    {id: 4, task: 'omoga', isDone: false},
]

export type FilterStateType = "All"|"Active"|"Closed"
export const Todolists = () =>{

    const [filterState, setFilterState] = useState<FilterStateType>("All")
    let filterTask: Task[] = []

    if (filterState === "All"){
        filterTask = [...tasks]
    } else if (filterState === "Active"){
        filterTask = tasks.filter(task => !task.isDone)
    } else if (filterState==="Closed"){
        filterTask = tasks.filter(task => task.isDone)
    }

    return <>
        <Todolist title={"aboba"} tasks={filterTask} setFilterState={setFilterState} filterState={filterState}/>
    </>
}