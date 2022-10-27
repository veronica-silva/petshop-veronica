import { useState, useEffect } from "react";
import estilos from "./ListaPosts.module.css";
import serverApi from "../../api/servidor-api";
import Loading from "../Loading/Loading";
import ArtigoPost from "../ArtigoPost/ArtigoPost";

const ListaPosts = (props) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getPosts() {
      try {
        const resposta = await fetch(`${serverApi}/${props.url || "posts"}`);
        const dados = await resposta.json();
        setPosts(dados);
        setLoading(false);
      } catch (error) {
        console.error("Deu ruim aí hein chapa " + error.message);
      }
    }
    getPosts();
  }, [props.url]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className={estilos.lista_posts}>
      {posts.map(({ id, titulo, subtitulo }) => (
        <ArtigoPost
          key={id}
          id={id}
          titulo={titulo}
          subtitulo={subtitulo}
          classe={estilos.post}
        />
      ))}
    </div>
  );
};

export default ListaPosts;
