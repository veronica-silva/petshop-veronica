import estilos from "./Menu.module.css";
const Menu = () => {
  return (
    <nav className={estilos.menu}>
      <a href="/">Blog</a>
      <a href="/">Produtos</a>
      <a href="/">Sobre</a>
      <a href="/">Contato</a>
    </nav>
  );
};

export default Menu;
