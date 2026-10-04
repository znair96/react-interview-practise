import React from "react";
import { useState, useEffect } from "react";
const URLValidator = () => {
  const [input, setInput] = useState("");
  const [isValid, setIsValid] = useState(null);

  function validateUrl() {
    // Write logic to validate the url
    if (
      (input.includes("http://") || input.includes("https://")) &&
      !input.includes(" ")
    ) {
      const domainName = input.split("://")[1];
      if (domainName.split(".").length > 1) {
        setIsValid(true);
      } else if (domainName.includes("localhost")) {
        setIsValid(true);
      } else if (domainName.includes(" ")) {
        setIsValid(false);
      }
    } else {
      setIsValid(false);
    }
  }
  useEffect(() => {
    validateUrl();
  }, [input]);

  return (
    <div>
      <h1>URL Validator</h1>

      <div className="container">
        <input
          placeholder="Enter url..."
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <p style={{ color: isValid ? "green" : "red" }}>
          {" "}
          {input && (isValid ? "Valid URL" : "Invalid URL")}{" "}
        </p>
      </div>
    </div>
  );
};

export default URLValidator;
