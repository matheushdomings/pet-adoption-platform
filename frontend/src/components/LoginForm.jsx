import { useState } from "react";
import { login } from "../services/authService";

function LoginForm({ onLogin }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setMensagem("");

    login({ email, senha })
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          onLogin(data.token, "Login realizado com sucesso!");
        } else {
          setMensagem(data.mensagem || "Erro ao fazer login.");
        }
      })
      .catch((error) => {
        console.error("Erro ao fazer login:", error);
        setMensagem("Erro ao conectar com o servidor.");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      {mensagem && <p>{mensagem}</p>}

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