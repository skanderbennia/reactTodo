import React, { useState } from "react";
import "./App.css";
import TaskForm from "./components/taskForm/TaskForm";
import TasksList from "./components/tasksList/TasksList";

function App() {
  let loading = false;
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Learn html",
      duration: 60,
    },
    {
      id: "2",
      title: "Learn react",
      duration: 30,
    },
    {
      id: "3",
      title: "Learn node",
      duration: 50,
    },
  ]);

  const addTask = (title, duration) => {
    setTasks([...tasks, { id: tasks.length + 1, title, duration }]);
  };
  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };
  const updateTask = (id, title, duration) => {
    const indexElem = tasks.findIndex((elem) => id === elem.id);
    setTasks([
      ...tasks.slice(0, indexElem),
      { id, title, duration },
      ...tasks.slice(indexElem + 1),
    ]);
  };
  return (
    <div className='app'>
      <div className='toggle'>
        <button onClick={toggleVisibility}>Toggle visibility</button>
      </div>
      <div>
        {loading && <div>Loading ... </div>}
        {!loading && isVisible && (
          <div>
            <TaskForm addTask={addTask} />
            <TasksList
              tasks={tasks}
              deleteTask={deleteTask}
              updateTask={updateTask}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
