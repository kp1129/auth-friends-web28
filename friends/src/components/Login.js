import React, { useState } from "react";
import axios from "axios";

const Login = props => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [accessDenied, setAccessDenied] = useState(false);

  const handleUsernameChange = e => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const login = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", { username, password })
      .then(res => {
        console.log(res);
        setAccessDenied(false);
        window.localStorage.setItem("token", JSON.stringify(res.data.payload));
        props.history.push("/home");
      })
      .catch(err => {
        setAccessDenied(true);
        setUsername("");
        setPassword("");
      });
  };

  return (
    <form className="login" onSubmit={login}>
      <label htmlFor="username">Username</label>{" "}
      <input
        type="text"
        value={username}
        name="username"
        id="username"
        onChange={handleUsernameChange}
      />
      <label htmlFor="password">Password </label>
      <input
        type="text"
        value={password}
        name="password"
        id="password"
        onChange={handlePasswordChange}
      />
      <button type="submit">Login</button>
      {accessDenied && (
        <p>
          <span>Incorrect username or password</span>
        </p>
      )}
    </form>
  );
};

export default Login;
