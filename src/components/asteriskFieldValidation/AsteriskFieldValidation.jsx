import React, { useEffect, useState } from "react";
import "./styles.css";

function AsteriskFieldValidation() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [isError, setError] = useState(false);
  const [shouldSetMessage, setShouldSetMessage] = useState(false);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (name && location) {
      setError(false);
      setShouldSetMessage(true);
      return;
    }
    setError(true);
  };
  return (
    <div className="container">
      <h1 className="title">Asterisk Field Validation</h1>
      <form className="form" onSubmit={onSubmitHandler}>
        <div className="input-group">
          <label htmlFor="name" className="label">
            Name <span className="asterisk">*</span>
          </label>
          <input
            id="name"
            className={`input ${isError ? "input-error" : ""}`}
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {isError && !name && <p className="error">Name is required.</p>}
        </div>

        <div className="input-group">
          <label htmlFor="location" className="label">
            Location <span className="asterisk">*</span>
          </label>
          <input
            id="location"
            className={`input ${isError ? "input-error" : ""}`}
            type="text"
            placeholder="Enter your location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          {isError && !location && (
            <p className="error">Location is required.</p>
          )}
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
        {shouldSetMessage && (
          <div className="success-message">
            <p>Submitted Successfully!</p>
            <p>Name: {name}</p>
            <p>Location: {location}</p>
          </div>
        )}
      </form>
    </div>
  );
}

export default AsteriskFieldValidation;
