import { Link } from "react-router-dom"

export const Header = () => {
    return(
    <div>
        <Link to="/">Home</Link>
        <Link to="/contatos">Contato</Link>
        <Link to="/cadastrar">Cadastrar</Link>
        <Link to="/clientes">Lista de Cliente</Link>
    </div>
)
}