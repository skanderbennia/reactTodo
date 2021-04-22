import React, { useState } from "react";
import "./Task.css";
export default function Task({ id, title, duration, deleteTask, updateTask }) {
  const [visibleField, setVisibleField] = useState(false);
  const [titleField, setTitleField] = useState(title);
  const [durationField, setDuration] = useState(duration);
  const updateHandler = () => {
    updateTask(id, titleField, durationField);
    setVisibleField(!visibleField);
  };
  return visibleField ? (
    <>
      title:
      <input
        type='text'
        value={titleField}
        onChange={(e) => setTitleField(e.target.value)}
      />
      duration:{" "}
      <input
        type='number'
        value={durationField}
        onChange={(e) => setDuration(e.target.value)}
      />
      <button onClick={updateHandler}>validate</button>
    </>
  ) : (
    <div className='task'>
      <div>
        <div className='title'>
          {title} ({duration} mn)
        </div>
      </div>
      <div className='actions'>
        <div>
          <button onClick={() => deleteTask(id)}>delete</button>
          <button onClick={() => setVisibleField(!visibleField)}>update</button>
        </div>
      </div>
    </div>
  );
}
