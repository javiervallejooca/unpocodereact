import { useState } from "react";
import AddTask from "../components/Tasks/AddTask";
import ViewTasks from "../components/Tasks/ViewTasks";

const Tasks = () => {
  const [tasksList, setTasksList] = useState([]);

  return (
    <div>
      <AddTask tasksList={tasksList} setTasksList={setTasksList} />
      <ViewTasks tasksList={tasksList} setTasksList={setTasksList} />
    </div>
  );
};

export default Tasks;
