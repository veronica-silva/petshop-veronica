import estilos from "./Cabecalho.module.css";
import logo from "../../assets/images/logo.png";
const Cabecalho = () => {
  return (
    <header>
      <h1>
        <a href="">
          <img
            src={logo}
            alt="logo com uma patinha branca dentro de um coração rosa"
          />
          PetShop
        </a>
      </h1>
      ;
    </header>
  );
};

export default Cabecalho;
