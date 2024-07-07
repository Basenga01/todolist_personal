import {FilterStateType} from "../../Todolists.tsx";

interface Props{
    title: string
    tasks: Task[]
    setFilterState:(filterState: FilterStateType)=>void
    filterState: FilterStateType
}
export interface Task{
    id: number
    task: string
    isDone:boolean
}
const setColor = (filterState: FilterStateType, state: FilterStateType, color) => {
    return {background: filterState===state?color:""}
}
export const Todolist = ({title, tasks, setFilterState, filterState}:Props) =>{

    const addTask = () =>{
        tasks.push({id: 5, task: "Задача", isDone: false})
    }

    return <div>

        <div>{title}</div>
        <div>
            <button onClick={addTask}>Добавить задачу</button>
        </div>
        <ul>
            {tasks.map((task) =><li key={task.id}>
                <input type={"checkbox"}
                       checked={task.isDone}/>
                {task.task}
            </li>)}

        </ul>

        <div>
            <button style={setColor(filterState,"All", "navy")} onClick={()=> setFilterState("All")}>All</button>
            <button style={setColor(filterState,"Active", "red")} onClick={()=> setFilterState("Active")}>Active</button>
            <button style={setColor(filterState,"Closed", "cyan")} onClick={()=> setFilterState("Closed")}>Close</button>
        </div>
    </div>
}