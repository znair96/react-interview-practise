import React, { useState, useEffect } from "react";
import "./styles.css";

function TodoWithTimeout() {
  // Add your state variables here
  const [todoItem, setTodoItem] = useState("");
  const [todoItemList, setTodoItemList] = useState([]);

  // {id,title,time,isRunning}
  // Add your useEffect for cleanup here
  useEffect(() => {
    let timer;
    timer = setInterval(() => {
      setTodoItemList((prevTodoItemList) =>
        prevTodoItemList.map((todo) => {
          if (todo.isRunning) {
            return {
              ...todo,
              time: todo.time + 1,
            };
          } else {
            return todo;
          }
        }),
      );
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  // Add your helper functions here (formatTime, handleAddTodo, etc.)
  const addTodoItemHandler = () => {
    if (!todoItem) {
      return;
    }
    setTodoItemList([
      ...todoItemList,
      {
        id: crypto.randomUUID(),
        title: todoItem,
        time: 0,
        isRunning: false,
      },
    ]);
    setTodoItem("");
  };
  const deleteTodoHandler = (todoId) => {
    setTodoItemList(todoItemList.filter((item) => item.id !== todoId));
  };

  const startTimerForSpecificTodo = (todoId) => {
    setTodoItemList((prevTodoItemList) =>
      prevTodoItemList.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            isRunning: !todo.isRunning,
          };
        } else {
          return todo;
        }
      }),
    );
  };
  const resetTimerForSpecificTodo = (todoId) => {
    setTodoItemList(
      todoItemList.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            isRunning: false,
            time: 0,
          };
        } else {
          return todo;
        }
      }),
    );
  };
  const formatTimer = (timer) => {
    if (timer < 60) {
      return `00:${String(timer).padStart(2, 0)}`;
    } else {
      if (timer % 60 === 0) {
        return `${String(timer / 60).padStart(2, 0)}:00`;
      } else {
        return `${String(Math.floor(timer / 60)).padStart(2, 0)}:${String(timer % 60).padStart(2, 0)}`;
      }
    }
  };
  return (
    <div className="todo-container">
      <h2>Todo with Timer</h2>
      <div className="input-container">
        <input
          type="text"
          className="todo-input"
          data-testid="todo-input"
          placeholder="Enter todo"
          // Add your value and onChange handlers
          value={todoItem}
          onChange={(e) => setTodoItem(e.target.value)}
        />
        <button
          className="add-button"
          data-testid="add-button"
          // Add your onClick handler
          onClick={addTodoItemHandler}
        >
          Add
        </button>
      </div>
      <ul className="todo-list">
        {/* Map through your todos here */}
        {todoItemList.map((todo) => (
          <li data-testid="todo-item" className="todo-item" key={todo.id}>
            <span className="todo-text">{todo.title}</span>
            <div className="timer">{formatTimer(todo.time)}</div>
            <div className="button-group">
              <button
                className={`timer-button ${todo.isRunning ? "pause" : "start"}`}
                onClick={() => startTimerForSpecificTodo(todo.id)}
              >
                {todo.isRunning ? "Pause" : "Start"}
              </button>
              <button
                className="timer-button reset"
                onClick={() => resetTimerForSpecificTodo(todo.id)}
              >
                Reset
              </button>
              <button
                className="delete-button"
                onClick={() => deleteTodoHandler(todo.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoWithTimeout;
