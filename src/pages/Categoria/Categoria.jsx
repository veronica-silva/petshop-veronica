import ListaCategorias from "../../components/ListaCategorias/ListaCategorias";
import estilos from "./Categoria.module.css";

const Categoria = () => {
  return (
    <section>
      <h2 className={estilos.titulo_secao}> Pet Notícias</h2>
      <ListaCategorias />
    </section>
  );
};

export default Categoria;
