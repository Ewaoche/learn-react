import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from 'react'

const tasks= [
    {
      "id": 1,
      "text": "Doctors Appointment",
      "day": "Feb 5th at 2:30pm",
      "reminder": true
    },
    {
      "id": 2,
      "text": "Meeting at School",
      "day": "Feb 6th at 1:30pm",
      "reminder": true
    },
    {
      "id": 3,
      "text": "Meeting at coding School",
      "day": "Feb 8th at 1:30pm",
      "reminder": true
    }
  ];


 
function App() {
   //Delete task
  const deleteTask = (id)=>{
   alert(`deleted ${id}`)
  }

  const [task,setTask] = useState(tasks)
  return (
    <div className="container">
      <Header name='emmy'/>
      <Tasks task={task} DeleteTask={deleteTask}/>
    </div>
  );
}

export default App;
