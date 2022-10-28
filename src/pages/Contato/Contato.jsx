import estilos from "./Contato.module.css";
import Caixa from "../../components/Caixa/Caixa";
import { TextField, Button } from "@mui/material";
import { useState } from "react";
const Contato = () => {
  const inputNome = (event) => {
    setNome(event.target.value);
  };
  const inputEmail = (event) => {
    setEmail(event.target.value);
  };
  const inputMensagem = (event) => {
    setMensagem(event.target.value);
  };
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  return (
    <section>
      <h2 className={estilos.titulo_secao}>Fale conosco</h2>
      <Caixa>
        <form method="post" className={estilos.formulario}>
          <div>
            <TextField
              onChange={inputNome}
              helperText="Informe o seu nome"
              type="text"
              fullWidth
              id="outlined-basic"
              label="Nome"
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              onChange={inputEmail}
              helperText="Informe o seu e-mail"
              type="email"
              fullWidth
              id="outlined-basic"
              label="Email"
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              onChange={inputMensagem}
              helperText="Escreva a sua mensagem"
              type="text"
              fullWidth
              id="outlined-multiline-static"
              label="Mensagem"
              multiline
              rows={6}
            />
          </div>
          <div>
            <Button variant="outlined">Enviar Mensagem</Button>
          </div>
        </form>
      </Caixa>
    </section>
  );
};

export default Contato;
