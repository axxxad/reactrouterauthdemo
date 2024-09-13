import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { Link } from "react-router-dom";
export const LoginPage = () => {
  const [username, setUsername] = useState("user");
  const [password, setPassword] = useState("password");
  const { login } = useAuth();
  const handleLogin = async (e) => {
    e.preventDefault();
    if (username === "user" && password === "password") {
      // Replace with actual authentication logic
      await login({ username });
    } else {
      alert("Invalid username or password");
    }
  };
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
