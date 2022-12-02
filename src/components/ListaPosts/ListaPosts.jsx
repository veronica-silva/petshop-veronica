import { useState, useEffect } from "react";
import estilos from "./ListaPosts.module.css";
import serverApi from "../../api/servidor-api";
import Loading from "../Loading/Loading";
import ArtigoPost from "../ArtigoPost/ArtigoPost";

const ListaPosts = ({ categoria }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getPosts() {
      setLoading(true);
      try {
        const resposta = await fetch(`${serverApi}/posts.json`);
        const dados = await resposta.json();

        let listaDePosts = [];

        for (const post in dados) {
          const objetoPost = {
            id: post,
            titulo: dados[post].titulo,
            subtitulo: dados[post].subtitulo,
            categoria: dados[post].categoria,
          };

          listaDePosts.push(objetoPost);

          if (categoria) {
            listaDePosts = listaDePosts.filter(
              (cadaPost) => cadaPost.categoria === categoria
            );
          }


        }


        setPosts(listaDePosts);
        setLoading(false);
      } catch (error) {
        console.error("Deu ruim aí hein chapa " + error.message);
      }
    }
    getPosts();
  }, [categoria]);

  if (loading) {
    return <Loading load="Posts..." />;
  }

  if (posts.length !== 0) {
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
  } else {
    return <h2 className={estilos.centraliza}>Ainda não há posts...</h2>;
  }
};

export default ListaPosts;
