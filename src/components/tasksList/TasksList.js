import React from "react";
import Task from "./../task/Task";
import "./TasksList.css";

export default function TasksList({ tasks, deleteTask, updateTask }) {
  return (
    <div className='tasks-list'>
      <div>
        {tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            title={task.title}
            duration={task.duration}
            deleteTask={deleteTask}
            updateTask={updateTask}
          />
        ))}
      </div>
    </div>
  );
}
