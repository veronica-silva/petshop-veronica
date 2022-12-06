import estilos from "./Produtos.module.css";
import Caixa from "../../components/Caixa/Caixa";
const Produtos = () => {
  return (
    <section>
      <h2 className={estilos.titulo_secao}>Conheça nossos produtos</h2>
      <Caixa listaDeClasses={estilos.produtos}>
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
      </Caixa>
    </section>
  );
};

export default Produtos;