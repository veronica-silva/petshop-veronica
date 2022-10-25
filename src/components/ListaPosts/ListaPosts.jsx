import { useState, useEffect } from "react";
import estilos from "./ListaPosts.module.css";
import serverApi from "../../api/servidor-api";
import Loading from "../Loading/Loading";

const ListaPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getPosts() {
      try {
        const resposta = await fetch(`${serverApi}/posts`);
        const dados = await resposta.json();
        setPosts(dados);
        setLoading(false);
      } catch (error) {
        console.error("Deu ruim aí hein chapa " + error.message);
      }
    }
    getPosts();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className={estilos.lista_posts}>
      {posts.map(({ id, titulo, subtitulo, descricao, categoria }) => (
        <article className={estilos.post} key={id}>
          <h3>{titulo}</h3>
          <h4>{subtitulo}</h4>
        </article>
      ))}
    </div>
  );
};

export default ListaPosts;
