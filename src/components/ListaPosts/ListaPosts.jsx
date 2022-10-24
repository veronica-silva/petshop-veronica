import estilos from "./ListaPosts.module.css";
import serverApi from "../../api/servidor-api";
const ListaPosts = () => {
  console.log(serverApi);
  const postsTemp = [];
  return (
    <div className={estilos.lista_posts}>
      {postsTemp.map(({ id, titulo, subtitulo, descricao, categoria }) => (
        <article className={estilos.post} key={id}>
          <h3>{titulo}</h3>
          <h4>{subtitulo}</h4>
          <h5>{categoria}</h5>
          <p>{descricao}</p>
        </article>
      ))}
    </div>
  );
};

export default ListaPosts;
