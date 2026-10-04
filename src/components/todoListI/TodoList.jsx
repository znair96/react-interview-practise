import React, { useState } from "react";
import "./styles.css";
function TodoList() {
  const [todoList, setTodoList] = useState([]);
  const [todoText, setTodoText] = useState("");
  const addTodoListHandler = () => {
    const todoItem = {
      id: crypto.randomUUID(),
      title: todoText,
      isCompleted: false,
    };
    setTodoList([...todoList, todoItem]);
    setTodoText("");
  };
  const checkBoxHandler = (e) => {
    setTodoList(
      todoList.map((todoItem) => {
        if (todoItem.id === e.target.value) {
          return {
            ...todoItem,
            isCompleted: e.target.checked,
          };
        } else {
          return todoItem;
        }
      }),
    );
  };
  const deleteTodoHandler = (todoId) => {
    setTodoList(todoList.filter((todoItem) => todoItem.id !== todoId));
  };
  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        name="todo"
        id="todo"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button onClick={addTodoListHandler}>Add</button>
      <ul className="todo-list">
        {todoList.map((todoItem) => (
          <li>
            <input
              type="checkbox"
              name={todoItem.title}
              value={todoItem.id}
              onChange={checkBoxHandler}
              isChecked={todoItem.isCompleted}
            />
            <span className={todoItem.isCompleted ? "marked" : ""}>
              {todoItem.title}
            </span>
            <button onClick={() => deleteTodoHandler(todoItem.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
