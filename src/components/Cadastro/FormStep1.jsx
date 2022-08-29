import { Link } from "react-router-dom"
import  "./Formulario.css"

export const FormStep1 = () => {
    return (
      <div className="formContainer">
        <div className="BarraSuperior">
          <p>Cadastro - Passo 1</p>
        </div>
        <div className="InputNomes">
        <label>Nome</label>
        <input type='text'></input>
        <label>Sobrenome</label>
        <input type='text'></input>
        </div>
        <div className="InputContato">
        <label>Telefone</label>
        <input type='text'></input>
        <label>E-mail</label>
        <input type='email'></input>
        </div>

        <div className="botao">
          <Link to="./formstep2">Próximo</Link>
        </div>
      </div>
    );
  };