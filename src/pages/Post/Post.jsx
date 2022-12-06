import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import estilos from "./Post.module.css";
import Caixa from "../../components/Caixa/Caixa";
import serverApi from "../../api/servidor-api";
import Loading from "../../components/Loading/Loading";

const Post = () => {
  const { id } = useParams();
  const [umPost, setUmPost] = useState([]);
  const [loading, setLoading] = useState(true);
  let history = useHistory();

  useEffect(() => {
    async function getPost() {
      try {
        const resposta = await fetch(`${serverApi}/posts/${id}.json`);
        const dados = await resposta.json();
        setUmPost(dados);
        setLoading(false);
        if (!dados) {
          history.push("/404");
        }
      } catch (error) {
        console.error("Deu merdinha no post: " + error.message);
      }
    }
    getPost();
  }, [id, history]);

  if (loading) {
    return <Loading />;
  }
  return (
    <section>
      <h2 className={estilos.titulo_secao}> {umPost.titulo}</h2>

      <Caixa>
        <h3>{umPost.categoria}</h3>
        <p>{umPost.descricao}</p>
      </Caixa>
    </section>
  );
};

export default Post;
