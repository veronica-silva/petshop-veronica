import estilos from "./Pagina404.module.css";
import catiorrinho404 from "../../assets/images/catiorrinho404.svg";
const Pagina404 = () => {
  return (
    <section className={estilos.pagina404}>
      <h2 className={estilos.titulo_secao}>Au, au, au foi mal!</h2>
      <div id="pagina404">
        <h3>Pagina não encontrada!</h3>
        <img
          src={catiorrinho404}
          className={estilos.imagem404}
          alt="ilustração de um cachorrinho confuso com ponto de interrogação ao lado"
        />
      </div>
    </section>
  );
};

export default Pagina404;
