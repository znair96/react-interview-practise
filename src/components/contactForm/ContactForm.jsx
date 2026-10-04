import React, { useState } from "react";
import "./styles.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [message, setMessage] = useState(false);
  const [error, setError] = useState({});
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (
      formData.email &&
      emailRegex.test(formData.email) &&
      formData.message &&
      formData.name
    ) {
      setError({});
      setMessage(true);
      return;
    }

    setError({
      name: formData.name.length === 0 ? "Name is required" : "",
      email:
        formData.email.length === 0
          ? "Email is required"
          : emailRegex.test(formData.email)
            ? ""
            : "Invalid email",
      message: formData.message.length === 0 ? "Message is required" : "",
    });
  };
  return (
    <div className="form-container">
      {/* Implement contact form logic here */}
      {!message ? (
        <form onSubmit={onSubmitHandler}>
          <div className="form-element">
            <label>Name :</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  [e.target.name]: e.target.value,
                })
              }
            />
            {error?.name && <p>{error.name}</p>}
          </div>
          <div className="form-element">
            <label>Email :</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  [e.target.name]: e.target.value,
                })
              }
            />
            {error?.email && <p>{error.email}</p>}
          </div>
          <div className="form-element">
            <label>Message :</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  [e.target.name]: e.target.value,
                })
              }
            ></textarea>
            {error?.message && <p>{error.message}</p>}
          </div>
          <div className="form-element">
            <button type="submit">Submit</button>
          </div>
        </form>
      ) : (
        <h1>Thank you, User!</h1>
      )}
    </div>
  );
}

export default ContactForm;
