import Task  from "./Task"
const Tasks = ({task,DeleteTask}) => {
  // const [Task, setTask] = useState(tasks)
  return (
    <>
        {task.map((task,deleteTask) =>(
          <Task key={task.id} task={task} DeleteTask={DeleteTask}/>
        ))}
    </>
  )
}

export default Tasks