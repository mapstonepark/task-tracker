import { useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'




function App() {
  const [tasks, setTasks] = useState( [
    {
        id: 1,
        text: 'Make Characters',
        day: 'October 22nd 7pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Check on Mom on her appt',
        day: 'October 19th 8am',
        reminder: true,
    },
    {
        id: 3,
        text: 'Call Tanner ',
        day: 'October 18th, 7:30am',
        reminder: true,
    }
    

])
// Add Task
const addTask =(task)=> {
  console.log(task)
}

// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task)=>task.id !==id))
}
 
// Toggle Reminder
const toggleReminder = (id) => {
  console.log(id)
  setTasks(tasks.map((task)=> 
  task.id === id ?
   {...task, reminder:!task.reminder } : task))
}
  return (
    <div className="container">
     <Header />
     <AddTask onAdd={addTask} />
     {tasks.length > 0 ? (
     <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> ): ('No Tasks To Show')
     }
    </div>
  );
}

export default App;
