import pacman from "../../assets/images/pacman-loading.svg";
import estilos from "./Loading.module.css";

const Loading = (props) => {
  return (
    <div className={estilos.loading}>
      <h2>{props.load} </h2>
      <img src={pacman} alt="imagem do pacman" />
    </div>
  );
};

export default Loading;
