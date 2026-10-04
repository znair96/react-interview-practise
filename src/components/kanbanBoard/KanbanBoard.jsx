import React, { useState } from "react";
import "./styles.css";
const columns = ["todo", "in-progress", "completed"];

export default function KanbanBoard() {
  const [taskName, setTaskName] = useState("");
  const [taskList, setTaskList] = useState([]);
  const addTask = () => {
    if (!taskName) {
      return;
    }
    setTaskList([
      ...taskList,
      {
        id: taskList.length + 1,
        name: taskName,
        status: "todo",
        isEdit: false,
      },
    ]);
    setTaskName("");
  };

  const moveTask = (id, direction) => {
    const taskFromId = taskList.find((task) => task.id === id);
    if (direction === "right") {
      setTaskList(
        taskList.map((task) => {
          if (task.id === taskFromId.id) {
            return {
              ...task,
              status: task.status === "todo" ? "in-progress" : "completed",
            };
          }
          return task;
        }),
      );
    } else {
      setTaskList(
        taskList.map((task) => {
          if (task.id === taskFromId.id) {
            return {
              ...task,
              status: task.status === "completed" ? "in-progress" : "todo",
            };
          }
          return task;
        }),
      );
    }
  };

  const deleteTask = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  const saveTitle = (id) => {
    setTaskList(
      taskList.map((task) =>
        task.id === id ? { ...task, isEdit: !task.isEdit } : task,
      ),
    );
  };

  const onChangeEditHandler = (e, id) => {
    setTaskList(
      taskList.map((task) =>
        task.isEdit && task.id === id
          ? { ...task, name: e.target.value }
          : task,
      ),
    );
  };
  const handleKeyDown = (event, id) => {
    if (event.key === "Enter") {
      saveTitle(id);
    }
  };

  return (
    <div>
      <h2>Kanban Board</h2>
      <input
        data-testid="task-input"
        placeholder="Enter task"
        className="inputBox"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button
        data-testid="add-task-button"
        className="addTaskBtn"
        onClick={addTask}
      >
        Add Task
      </button>
      <div className="kanban-board">
        {columns.map((col, index) => (
          <div
            key={col}
            className="column"
            data-testid={`column-${col}`}
            id={index}
          >
            <h4>{col.replace("-", " ").toUpperCase()}</h4>
            {taskList
              .filter((task) => task.status === col)
              .map((task) => (
                <div className="task-card" key={task.id}>
                  {task.isEdit ? (
                    <input
                      type="text"
                      value={task.name}
                      onChange={(e) => onChangeEditHandler(e, task.id)}
                    />
                  ) : (
                    <p>{task.name}</p>
                  )}
                  <div className="task-buttons">
                    {["in-progress", "completed"].includes(col) && (
                      <button
                        className="shiftBtn"
                        onClick={() => moveTask(task.id, "left")}
                      >
                        {" "}
                        {"←"}{" "}
                      </button>
                    )}
                    {["todo", "in-progress"].includes(col) && (
                      <button
                        className="shiftBtn"
                        onClick={() => moveTask(task.id, "right")}
                      >
                        {" "}
                        {"→"}{" "}
                      </button>
                    )}
                    <button
                      className="editBtn"
                      onClick={() => saveTitle(task.id)}
                      onKeyDown={(e) => handleKeyDown(e, id)}
                    >
                      Edit
                    </button>
                    <button
                      className="deleteBtn"
                      onClick={() => deleteTask(task.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}
