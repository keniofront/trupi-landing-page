import { useState } from "react";
import styles from "./Form.module.css";
import Button from "../../components/Button/Button";

function Form() {
  // Para iniciantes é mais fácil ver um state por campo (cada campo tem seu useState).
  // useState guarda o valor atual do campo e re-renderiza quando muda.
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  // handleSubmit é chamado quando o usuário clica em "Enviar".
  function handleSubmit(e) {
    // e.preventDefault() evita que o navegador recarregue a página (comportamento padrão).
    e.preventDefault();

    // Validação simples. Campos obrigatórios mínimos
    if (!nome.trim() || !email.trim() || !mensagem.trim()) {
      alert("Por favor preencha Nome, Email e Mensagem.");
      return; // para a execução se falta algo
    }

    // Validação mínima de e-mail (suficiente para exemplo didático)
    if (!email.includes("@")) {
      alert("E-mail inválido.");
      return;
    }

    // Aqui construiríamos o objeto para enviar ao servidor.
    const dados = { nome, sobrenome, telefone, email, mensagem };

    // Por agora, apenas mostramos no console — fácil de testar no navegador.
    console.log("Dados submetidos:", dados);

    // Boa prática: limpar os campos após sucesso (melhora a UX)
    setNome("");
    setSobrenome("");
    setTelefone("");
    setEmail("");
    setMensagem("");
  }

  // JSX do formulário: usamos <label> para acessibilidade e tipos HTML (email, tel)
  // Cada input é um "controlled component": o valor vem do state e onChange atualiza o state.
  // Isso facilita validar, limpar ou enviar os dados.
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.row}>
        {/* Nome (required) */}
        <input
          type="text"
          value={nome} // valor controlado pelo state
          onChange={(e) => setNome(e.target.value)} // atualiza o state quando usuário digita
          required // HTML ajuda com validação básica no navegador
          placeholder="Digite seu Nome:"
        />

        {/* Sobrenome (opcional) */}
        <input type="text" value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} placeholder="Digite seu Sobrenome:" />
      </div>

      <div className={styles.row}>
        {/* Telefone: usamos type="tel" para sugerir teclado numérico em mobiles */}
        <input type="tel" value={telefone} onChange={(e) => setTelefone(e.target.value)} placeholder="Digite seu Telefone:" />
        {/* Email (required). type="email" já dá ajuda do navegador */}

        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Digite seu Email:" />
      </div>

      {/* Mensagem (required): textarea para textos maiores */}
      <textarea value={mensagem} onChange={(e) => setMensagem(e.target.value)} required rows={4} placeholder="Mensagem:" />

      {/* Botão envia o form; onSubmit no <form> trata o envio */}
      <Button type="submit" text={"Enviar"} />
    </form>
  );
}

export default Form;
