import React, { useState, useEffect } from "react";

const ViewTasks = () => {
  const [tasksList, setTasksList] = useState([]);

  useEffect(() => {
    setTasksList(JSON.parse(localStorage.getItem("tareas")));
  }, []);

  const handleDelete = (name) => {
    let index = tasksList.findIndex((x) => x.name === name); // Busca el objeto con el nombre donde se ha hecho click.
    tasksList.splice(index, 1); // Quita ese elemento.
    setTasksList(tasksList); // Seteamos el array sin ese elemento.
    localStorage.setItem("tareas", JSON.stringify(tasksList)); // Lo volcamos al localStorage.
  };

  return (
    <>
      <h2>Listado de tareas</h2>

      {tasksList && tasksList.length > 0 ? (
        tasksList.map((task) => {
          return (
            <p key={task.name} onClick={() => handleDelete(task.name)}>
              {task.name}
            </p>
          );
        })
      ) : (
        <h2>Sin tareas...</h2>
      )}
    </>
  );
};

export default ViewTasks;
