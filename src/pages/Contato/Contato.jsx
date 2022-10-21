import estilos from "./Contato.module.css";
import Caixa from "../../components/Caixa/Caixa";
const Contato = () => {
  return (
    <section>
      <h2 className={estilos.titulo_secao}>Fale conosco</h2>
      <Caixa id="contato">
        <p>em breve</p>
        <p>teremos</p>
        <p>um formulário</p>
        <p>através</p>
        <p>de uma biblioteca</p>
        <p>de componentes</p>
      </Caixa>
    </section>
  );
};

export default Contato;
