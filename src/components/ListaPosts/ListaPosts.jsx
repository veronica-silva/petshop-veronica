import estilos from "./ListaPosts.module.css";

const ListaPosts = () => {
  return (
    <div className={estilos.lista_posts}>
      <article className={estilos.post}>
        <h3>Titulo...</h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
        deserunt laborum facilis enim aperiam accusantium.
      </article>
      <article className={estilos.post}>
        <h3>Titulo...</h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
        deserunt laborum facilis enim aperiam accusantium.
      </article>
      <article className={estilos.post}>
        <h3>Titulo...</h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
        deserunt laborum facilis enim aperiam accusantium.
      </article>
      <article className={estilos.post}>
        <h3>Titulo...</h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
        deserunt laborum facilis enim aperiam accusantium.
      </article>
    </div>
  );
};

export default ListaPosts;
