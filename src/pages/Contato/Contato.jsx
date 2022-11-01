import estilos from "./Contato.module.css";
import Caixa from "../../components/Caixa/Caixa";
import { TextField, Button } from "@mui/material";
import serverApi from "../../api/servidor-api";
import { useState } from "react";
import { useHistory } from "react-router-dom";
const Contato = () => {
  const inputNome = (event) => setNome(event.target.value);
  const inputEmail = (event) => setEmail(event.target.value);
  const inputMensagem = (event) => setMensagem(event.target.value);

  let history = useHistory();
  const enviarContato = async (event) => {
    event.preventDefault();
    const opcoes = {
      method: "POST",
      body: JSON.stringify({ nome, email, mensagem }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    console.log(nome, email, mensagem);
    try {
      await fetch(`${serverApi}/contatos`, opcoes);
      alert("Dados enviados!");
      history.push("/");
    } catch (error) {
      console.log("Deu ruim " + error.message);
    }
  };

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  let desabilitado = !nome || !email || !mensagem;
  return (
    <section>
      <h2 className={estilos.titulo_secao}>Fale conosco</h2>
      <Caixa>
        <form
          method="post"
          className={estilos.formulario}
          onSubmit={enviarContato}
        >
          <div>
            <TextField
              onChange={inputNome}
              helperText={!nome ? "Informe o seu nome" : ""}
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
              helperText={!email ? "Informe o seu e-mail" : ""}
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
              helperText={!mensagem ? "Escreva a sua mensagem" : ""}
              type="text"
              fullWidth
              id="outlined-multiline-static"
              label="Mensagem"
              multiline
              rows={6}
            />
          </div>
          <div>
            <Button disabled={desabilitado} type="submit" variant="outlined">
              Enviar Mensagem
            </Button>
          </div>
        </form>
      </Caixa>
    </section>
  );
};

export default Contato;
