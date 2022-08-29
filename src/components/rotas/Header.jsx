import { Link } from "react-router-dom"




export const Header = () => {
    return(
    <nav-lateral>


        <Link to="/">Home</Link>
        <Link to="/cadastrar">Cadastrar</Link>
        <Link to="/clientes">Lista de Cliente</Link>
    </nav-lateral>
)
}