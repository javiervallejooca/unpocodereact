import React from "react";
import TaskDetail from "./TaskDetail";

const ViewTasks = ({ tasksList, setTasksList }) => {
  const handleDelete = (name) => {
    // No debemos mutar el estado, por ello seteamos un nuevo array con filter. NOTA: Splice muta el array, no es recomendable usarlo con React.
    setTasksList(tasksList.filter((task) => task.name !== name));
    localStorage.setItem("tareas", JSON.stringify(tasksList)); // Lo volcamos al localStorage.
  };

  return (
    <>
      <h2>Listado de tareas</h2>

      {tasksList && tasksList.length > 0 ? (
        tasksList.map((task) => {
          return (
            <TaskDetail task={task} />
            // <p key={task.name} onClick={() => handleDelete(task.name)}>
            //   {task.name}
            // </p>
          );
        })
      ) : (
        <h2>Sin tareas...</h2>
      )}
    </>
  );
};

export default ViewTasks;
