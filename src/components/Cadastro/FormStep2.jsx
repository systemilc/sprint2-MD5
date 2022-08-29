import "./Formulario.css";
import { Link } from "react-router-dom"

export const FormStep2 = () => {
  return (
    <div className="formContainer">
      <div className="BarraSuperior">
          <p>Cadastro - Passo 2</p>
        </div>
      <div className="InputNomes">
        <label>CEP</label>
        <input type="text"></input>
        <label>Endereço </label>
        <input type="text"></input>
      </div>
      <div className="Input">
        <label>Endereço </label>
        <input type="text"></input>
      </div>

      <div className="botao"><Link to="./formstep3">Próximo</Link></div>
    </div>
  );
};
