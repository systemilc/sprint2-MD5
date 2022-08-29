import  "./Formulario.css"

export const FormStep3 = () => {
    return (
      <div className="formContainer">
        <div className="BarraSuperior">
          <p>Cadastro - Passo 3</p>
        </div>
        <div className="InputNomes">
        <label>Data Nascimento</label>
        <input type='date'></input>
        <label>CPF </label>
        <input type='text'></input>
        </div>
        <div className="Input">
        <label>Renda Mensal </label>
        <input type='text'></input>
    
        </div>

        <div className="botao"><button>Salvar</button></div>
      </div>
    );
  };