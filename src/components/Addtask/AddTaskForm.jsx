import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "./task.css";

const AddTaskForm = ({ addTask, taskToEdit, updateTask }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    status: "Pending",
  });

  useEffect(() => {
    if (taskToEdit) {
      setTask(taskToEdit);
    }
  }, [taskToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!task.title || !task.dueDate) {
      alert("Please provide valid task details!");
      return;
    }

    if (taskToEdit) {
      updateTask(taskToEdit.index, task);
    } else {
      addTask(task);
    }

    setTask({ title: "", description: "", dueDate: "", status: "Pending" });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <div className="maincontainer">
          <div className="taskcontainer">
          <div>
            <TextField
              type="text"
              id="outlined-basic"
              label="Task Name"
              variant="outlined"
              name="title"
              value={task.title}
              onChange={handleChange}
              style={{width: '250px'}}
              required
            />
          </div>
          <div>
            <TextField
              minRows={3}
              multiline
              fullWidth
              id="outlined-basic"
              label="Task Name"
              variant="outlined"
              name="description"
              value={task.description}
              style={{width: '250px'}}
              onChange={handleChange}
            />
          </div>
          <div>
            <TextField
              type="date"
              name="dueDate"
              value={task.dueDate}
              onChange={handleChange}
              style={{width: '250px'}}
              required
            />
          </div>
          <div>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="status"
              value={task.status}
              onChange={handleChange}
              style={{width: '250px'}}
            >
              <MenuItem value="Pending">Pending</MenuItem>
              <MenuItem value="In Progress">In Progress</MenuItem>
              <MenuItem value="Completed">Completed</MenuItem>
            </Select>
          </div>
          </div>
        </div>
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}>
          <button
            type="submit"
            style={{
              paddingTop: "15px",
              paddingBottom: "15px",
              backgroundColor: "#0f95f5",
              color: "white",
              width: "120px",
              borderRadius: "7px",
              outline: "none",
              border: "none",
            }}
          >
            {taskToEdit ? "Update Task" : "Add Task"}
          </button>
          </div>
    </form>
  );
};

export default AddTaskForm;
