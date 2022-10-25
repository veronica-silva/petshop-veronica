import estilos from "./Post.module.css";
import Caixa from "../../components/Caixa/Caixa";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import serverApi from "../../api/servidor-api";

const Post = () => {
  const { id } = useParams();

  useEffect(() => {
    async function getPost() {
      try {
        const resposta = await fetch(`${serverApi}/posts/${id}`);
        const dados = await resposta.json();
        console.log(dados);
      } catch (error) {
        console.error("Deu merdinha no post: " + error.message);
      }
    }
    getPost();
  }, [id]);
  return (
    <section>
      <h2 className={estilos.titulo_secao}> Titulo do post...</h2>

      <Caixa>
        <h3>Categoria do post...</h3>
        <p>Descrição do post...</p>
      </Caixa>
    </section>
  );
};

export default Post;
