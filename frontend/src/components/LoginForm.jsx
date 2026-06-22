import { useState } from "react";
import { login } from "../services/authService";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    login({ email, senha })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("token", data.token);
        console.log("Token salvo:", data.token);
      })
      .catch((error) => {
        console.error("Erro ao fazer login:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(event) => setSenha(event.target.value)}
      />

      <button type="submit">
        Entrar
      </button>
    </form>
  );
}

export default LoginForm;