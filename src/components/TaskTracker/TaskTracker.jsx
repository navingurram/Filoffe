import React, { useState } from "react";
import AddTaskForm from "../Addtask/AddTaskForm";
import TaskList from "../Tasklist/TaskList";

const TaskTracker = () => {
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  });

  const [taskToEdit, setTaskToEdit] = useState(null);

  const saveToLocalStorage = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const addTask = (task) => {
    const updatedTasks = [...tasks, task];
    setTasks(updatedTasks);
    saveToLocalStorage(updatedTasks);
  };

  const deleteTask = (index) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      const updatedTasks = tasks.filter((_, i) => i !== index);
      setTasks(updatedTasks);
      saveToLocalStorage(updatedTasks);
    }
  };

  const editTask = (index) => {
    setTaskToEdit({ ...tasks[index], index });
  };

  const updateTask = (index, updatedTask) => {
    const updatedTasks = tasks.map((task, i) => (i === index ? updatedTask : task));
    setTasks(updatedTasks);
    saveToLocalStorage(updatedTasks);
    setTaskToEdit(null);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: '50px' }}>Task Tracker</h1>
      <AddTaskForm
        addTask={addTask}
        taskToEdit={taskToEdit}
        updateTask={updateTask}
      />
      <TaskList tasks={tasks} deleteTask={deleteTask} editTask={editTask} />
    </div>
  );
};

export default TaskTracker;
