import React from "react";

const TaskDetail = ({ task }) => {
  return (
    <div className="flex align-items-center justify-content-start">
      <input type="checkbox" onChange={handleOnChange} /> {task.name}
    </div>
  );
};

export default TaskDetail;
