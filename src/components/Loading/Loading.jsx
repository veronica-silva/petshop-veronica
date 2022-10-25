import pacman from "../../assets/images/pacman-loading.svg";
import estilos from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={estilos.loading}>
      <h2>Carregando...</h2>
      <img src={pacman} alt="imagem do pacman" srcset="" />
    </div>
  );
};

export default Loading;
