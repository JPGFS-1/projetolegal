import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/contato">Contato</Link>
      </nav>
    </div>
  );
}
