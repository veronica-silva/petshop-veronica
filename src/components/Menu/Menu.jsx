import { NavLink } from "react-router-dom";
import estilos from "./Menu.module.css";
const Menu = () => {
  return (
    <nav className={estilos.menu}>
      <NavLink exact to="/">
        Blog
      </NavLink>
      <NavLink to="/produtos">Produtos</NavLink>
      <NavLink to="/sobre">Sobre</NavLink>
      <NavLink to="/contato">Contato</NavLink>
    </nav>
  );
};

export default Menu;
