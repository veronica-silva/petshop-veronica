import estilos from "./Sobre.module.css";
const Sobre = () => {
  return (
    <section>
      <h2 className={estilos.titulo_secao}>Pet Notícias</h2>
      <div id="sobre">
        <h3>Missão</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          quibusdam maxime impedit reprehenderit repellat perferendis.
        </p>
        <h3>Visão</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
          mollitia tenetur suscipit libero at id!
        </p>
        <h3>Valores</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio non
          culpa maxime autem consequatur magni.
        </p>
      </div>
    </section>
  );
};

export default Sobre;