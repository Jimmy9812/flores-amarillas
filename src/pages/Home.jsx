import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

export default function Home() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");

  const CORRECT_PASSWORD = "2109";

  const handleNumberClick = (num) => {
    const newPassword = password + num;
    setPassword(newPassword);

    if (newPassword === CORRECT_PASSWORD) {
      navigate("/flores");
    }

    if (newPassword.length >= CORRECT_PASSWORD.length && newPassword !== CORRECT_PASSWORD) {
      setTimeout(() => setPassword(""), 300);
    }
  };

  return (
    <div className="home-body">
      <div className="home-container">
        <div className="password-card">
          <h2>🔒 </h2>
          <h2>Daya</h2>
          <h2>Ingrese tu contraseña</h2>
          <div className="password-dots">
            {"•".repeat(password.length)}
          </div>
          <div className="keypad">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num, index) => (
              <button
                key={index}
                onClick={() => handleNumberClick(num)}
                className={`key ${num === 0 ? "zero" : ""}`}
              >
                {num}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
