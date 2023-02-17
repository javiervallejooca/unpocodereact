import moment from "moment/moment";
import React, { useState } from "react";

const AddTask = (tasksList, setTasksList) => {
  const [name, setName] = useState("");

  const handleNewTask = () => {
    let array = [];
    let previousTaks = JSON.parse(localStorage.getItem("tareas"));
    previousTaks && previousTaks.map((task) => array.push(task));

    const task = {
      name: name,
      created: moment().format("DD/MM/YYYY, hh:mm:ss"),
      finished: false,
    };

    array.push(task);

    localStorage.setItem("tareas", JSON.stringify(array));
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
