import { Link } from "react-router-dom"
import './Menu.css'

export const Menu = () => {
    return(
    <div className='nav-lateral'>
     <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="./cadastrar">Cadastrar</Link></li>
    <li><Link to="./clientes">Lista de Cliente</Link></li>
  </ul>
    </div>
)
}