import { useState } from "react";
import "../styles/LoginPage.css";
import { useNavigate } from "react-router-dom";
import { users } from "../data/users";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  // ฟังก์ชัน login
  const handleOnclickLogin = () => {
    const user = users.find(
      (e) => e.username === username && e.password === password
    );

    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      setSuccess(`Welcome ${user.name}!`);
      setTimeout(() => {
        navigate("/dashboard");
      }, 3000);
    } else {
      setError("Invalid email or password! Please check your entries.");
    }
  };

  return (
    <div className="container-login">
      <form className="form-login" action="">
        <div className="form-title">Login</div>
        {error && <p className="text-error">{error}</p>}
        <div className="input-box">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="button"
          className="btn-login"
          onClick={handleOnclickLogin}
        >
          LOGIN
        </button>
        {success && <p className="text-success">{success}</p>}
      </form>
    </div>
  );
}
