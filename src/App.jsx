import { useState, useEffect } from "react";
import "./components/todoListII/styles.css";
import KanbanBoard from "./components/kanbanBoard/KanbanBoard.jsx";

// const tabsData = [
//   { title: "Tab 1", content: "This is the content of Tab 1" },
//   { title: "Tab 2", content: "This is the content of Tab 2" },
//   { title: "Tab 3", content: "This is the content of Tab 3" },
// ];

function App() {
  return (
    <>
      {/* <Template /> */}
      {/* <div className="App">
        <h2>Todo List with Timer</h2>
        <p>
          Build a todo list where each task has its own timer that can be
          started, paused, and reset.
        </p>
        <div className="container">
          <TodoWithTimeout />
        </div>
      </div> */}
      {/* <Tabs tabs={tabsData} /> */}
      {/* <TodoList /> */}
      {/* <PriceRangeSlider /> */}
      <KanbanBoard />
    </>
  );
}
export default App;
