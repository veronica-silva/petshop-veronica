import estilos from "./Contato.module.css";
import Caixa from "../../components/Caixa/Caixa";
import { TextField, Button } from "@mui/material";
const Contato = () => {
  return (
    <section>
      <h2 className={estilos.titulo_secao}>Fale conosco</h2>
      <Caixa>
        <form method="post" className={estilos.formulario}>
          <div>
            <TextField
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
