import React from 'react';
import Task from './Task';

const TaskList = props => {
  return (
    <div className="task-list">
      <div className="task-list-title">
        <div>{props.status}</div>
      </div>
      {
        props.tasks.map(task =>(
          <Task key={task.id} task={task}/>
        ))
      }
    </div>
  );
}

export default TaskList;
