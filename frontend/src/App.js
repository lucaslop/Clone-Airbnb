import React, { useState } from "react";
import "./index.css";
import logo from "./assets/logo.svg";
import api from "./services/api";
function App() {
  const [email, setEmail] = useState("");
  async function handleSubmit(event) {
    event.preventDefault();
    const response = await api.post("/sessions", {
      email
    });
    console.log(response);
  }

  return (
    <div className="container">
      <img src={logo} alt="logo" />
      <div className="content">
        <p>
          Oferça <strong>spots</strong> para progamadores e encontre{" "}
          <strong>talentos</strong>
          para sua empresa
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-MAIL *</label>
          <input
            type="email"
            id="email"
            placeholder="Seu Email"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
          <button type="submit" className="btn">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
