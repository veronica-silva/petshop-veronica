import estilos from "./ListaPosts.module.css";
import serverApi from "../../api/servidor-api";
const ListaPosts = () => {
  console.log(serverApi);

  const postsTemp = [];

  const getPosts = async () => {
    try {
      const resposta = await fetch(`${serverApi}/posts`);
      const dados = await resposta.json();
      console.log(dados);
    } catch (error) {
      console.log("Deu ruim aí hein chapa " + error.message);
    }
  };

  getPosts();

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
