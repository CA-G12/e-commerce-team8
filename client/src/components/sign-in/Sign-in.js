/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import "./Sign-in.css";

export default function Signin() {
  const [data, setData] = useState({
    password: "",
    email: "",
  });
  const [errMassage, setMessage] = useState(null);
  const submit = () => {
    axios
      .post("/signin", data)
      .then((response) => response.data.message)
      .then((message) => swal("Signed In", message, "success"))
      .then(() => {
        window.location.href = "/";
      })
      .catch((error) => {
        setMessage(error.response.data.message);
      });
  };

  return (
    <div className="sign-in-body">
      <h3 style={{ textAlign: "center" }}>Sign in</h3>
      <form className="sign-in-form">
        <input
          className="form-input"
          value={data.email}
          onChange={(e) => {
            setData((prev) => ({
              ...prev,
              email: e.target.value,
            }));
          }}
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          required
        />
        <input
          className="form-input"
          value={data.password}
          onChange={(e) => {
            setData((prev) => ({
              ...prev,
              password: e.target.value,
            }));
          }}
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          required
        />
        <p
          className="handle-error"
          style={errMassage ? { display: "block" } : { display: "none" }}
        >
          {errMassage}
        </p>
        <button
          className="form-input form-input-submit"
          onClick={submit}
          type="button"
        >
          Sign in
        </button>
      </form>
    </div>
  );
}
