import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StickyNotes.css";

function Login() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!username.trim()) {
      alert("Please enter a valid username.");
    } else {
      navigate("/stickynotes", { state: { username } });
    }
  };

  return (
    <div className="login-container">
      <h1>Sticky Notes</h1>
      <div className="login-box">
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;
