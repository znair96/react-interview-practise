import { useEffect, useState } from "react";

function AutoSaveInput() {
  const [text, setText] = useState(localStorage.getItem("inputText") ?? "");

  const handleTextChange = (e) => {
    setText(e.target.value);
    localStorage.setItem("inputText", e.target.value);
  };
  const clearText = () => {
    setText("");
    localStorage.clear("inputText");
  };
  return (
    <div>
      <h1>Auto Save Input</h1>
      {/* your code here  */}
      <input
        data-testid="input-field"
        type="text"
        value={text}
        onChange={handleTextChange}
      />
      <button data-testid="clear-btn" onClick={() => clearText()}>
        Clear
      </button>
    </div>
  );
}

export default AutoSaveInput;
