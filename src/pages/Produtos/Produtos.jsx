import estilos from "./Produtos.module.css";
const Produtos = () => {
  return (
    <section>
      <h2 className={estilos.titulo_secao}>Conheça nossos produtos</h2>
      <div className={estilos.produtos} id="produtos">
        <article>
          <h3>Produto 1</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
            omnis laboriosam veritatis ipsam doloremque molestiae similique non
            quis vitae voluptatibus voluptates, in tempore illum labore totam
            necessitatibus minima, eligendi inventore!
          </p>
        </article>
        <article>
          <h3>Produto 1</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
            omnis laboriosam veritatis ipsam doloremque molestiae similique non
            quis vitae voluptatibus voluptates, in tempore illum labore totam
            necessitatibus minima, eligendi inventore!
          </p>
        </article>
        <article>
          <h3>Produto 1</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
            omnis laboriosam veritatis ipsam doloremque molestiae similique non
            quis vitae voluptatibus voluptates, in tempore illum labore totam
            necessitatibus minima, eligendi inventore!
          </p>
        </article>
      </div>
    </section>
  );
};

export default Produtos;
