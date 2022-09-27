/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import "./Sign-up.css";

export default function Signup() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    repeatedPassword: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    const { name, email, password, repeatedPassword } = user;
    if (!name || !email || !password || !repeatedPassword) {
      swal("Warning!", "Please fill in all fields!", "warning");
    } else {
      axios
        .post("/signup", user)
        .then((res) => {
          swal("hello", res.data.message, "success").then(() => {
            window.location.href = "/";
          });
        })
        .catch((err) => setMessage(err.response.data.message));
    }
  };

  return (
    <div className="signup">
      <h2>Sign Up</h2>
      <div className="signup-form">
        <input
          type="text"
          value={user.name}
          name="name"
          placeholder="username"
          onChange={handleChange}
        />
        <input
          type="email"
          value={user.email}
          name="email"
          placeholder="email"
          onChange={handleChange}
        />
        <input
          type="password"
          value={user.password}
          name="password"
          placeholder="password"
          onChange={handleChange}
        />
        <input
          type="password"
          value={user.repeatedPassword}
          name="repeatedPassword"
          placeholder="confirm password"
          onChange={handleChange}
        />

        <p>{message}</p>
        <button type="button" onClick={handleSubmit}>
          {" "}
          Sign Up{" "}
        </button>
      </div>
    </div>
  );
}
