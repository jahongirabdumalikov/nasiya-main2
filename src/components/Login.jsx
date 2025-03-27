import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import myImage from "../assets/logo.svg";
import myImages from "../assets/icon.svg";
import myImage2 from "../assets/carbon.svg";
import myImage3 from "../assets/show.svg";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username !== "Jahongir" || password !== "1606") {
      setError("Noto‘g‘ri foydalanuvchi nomi yoki parol! Iltimos, qayta urinib ko‘ring.");
      setIsModalOpen(true);
      return;
    }

    setError(""); // Xatolikni tozalash
    navigate("/dashboard"); // Keyingi sahifaga yo‘naltirish
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <div className="logo">
          <img src={myImage} alt="logo.svg" />
        </div>
        <h1>Dasturga kirish</h1>
        <p className="subtitle">
          Iltimos, tizimga kirish uchun login va parolingizni kiriting.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="login-form">
        <div className="input-group">
          <div className="username-input">
            <img src={myImages} alt="icon.svg" />
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Ismingizni kiriting"
            />
          </div>
        </div>

        <div className="input-group">
          <div className="password-input">
            <img src={myImage2} alt="carbon.svg" />
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Parolingizni kiriting"
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              <img src={myImage3} alt="show.svg" />
            </button>
          </div>
        </div>

        <div className="forgot-password">
          <a href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }}>Parolni unutdingizmi?</a>
        </div>

        <button type="submit" className="login-button">
          Kirish
        </button>

        <p className="register-text">
          Hisobingiz yo'q bo'lsa, tizimga kirish huquqini olish uchun{" "}
          <a href="#" className="admin-link">do'kon administratori</a>{" "}
          bilan bog'laning.
        </p>
      </form>

      {isModalOpen && (
        <div className="modal-overlay" style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <div className="modal" style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
            width: "400px",
            height: "200px"
          }}>
            <h2>{error ? "Xatolik!" : "Juda ko‘p noaniq urinish"}</h2>
            <p>{error || "Iltimos biroz vaqtdan so‘ng qayta urinib ko‘ring."}</p>
            <button onClick={() => { setIsModalOpen(false); setError(""); }} style={{
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              padding: "10px 20px",
              fontSize: "16px",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "20px"
            }}>Tushunarli</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
