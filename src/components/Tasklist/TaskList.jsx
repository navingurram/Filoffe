import React from "react";
import '../Addtask/task.css'
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const TaskList = ({ tasks, deleteTask, editTask }) => {
  return (
    <div className="tablecontainer">
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th>Sr No</th>
          <th>Title</th>
          <th>Description</th>
          <th>Due Date</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.length === 0 ? (
          <tr>
            <td colSpan="5" style={{ textAlign: "center" }}>
              No tasks to display
            </td>
          </tr>
        ) : (
          tasks
            .filter((task) => task)
            .map((task, index) => (
              <tr key={index}>
                <td>{index+1}</td>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>{task.dueDate}</td>
                <td>{task.status}</td>
                <td>
                  <FaRegEdit onClick={() => editTask(index)} style={{ marginRight: "10px", fontSize: '18px', color: 'lightgreen', }}
                     />
                  <MdDelete onClick={() => deleteTask(index)} style={{ fontSize: '18px', color: 'red' }}/>
                </td>
              </tr>
            ))
        )}
      </tbody>
    </table>
    </div>
  );
};

export default TaskList;
