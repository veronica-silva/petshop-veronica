import { useState, useEffect } from "react";
import estilos from "./ListaCategorias.module.css";
import serverApi from "../../api/servidor-api";
import Loading from "../Loading/Loading";
import { Link } from "react-router-dom";

const ListaCategorias = () => {
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getCategorias() {
      try {
        const resposta = await fetch(`${serverApi}/categorias`);
        const dados = await resposta.json();
        setCategorias(dados);
        setLoading(false);
      } catch (error) {
        console.error("Deu ruim aí hein chapa " + error.message);
      }
    }
    getCategorias();
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className={estilos.lista_categorias}>
      <ul>
        {categorias.map(({ id, nome }) => (
          <li key={id} nome={nome}>
            <Link to={`/categorias/${nome}`}>{nome}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaCategorias;