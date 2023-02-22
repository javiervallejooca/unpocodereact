import moment from "moment/moment";
import React, { useState, useEffect } from "react";

const AddTask = ({ tasksList, setTasksList }) => {
  const [name, setName] = useState("");

  const handleNewTask = () => {
    // Control de tareas con mismo nombre.
    if (tasksList.find((task) => task.name === name)) {
      alert("Existe");
      setName("");
      return;
    }

    const task = {
      name: name,
      created: moment().format("DD/MM/YYYY, hh:mm:ss"),
      finished: false,
    };

    setTasksList([...tasksList, task]);

    localStorage.setItem("tareas", JSON.stringify(tasksList));
    setName("");
  };

  return (
    <>
      <h2>Nueva tarea</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={handleNewTask}>Enviar</button>
    </>
  );
};

export default AddTask;
