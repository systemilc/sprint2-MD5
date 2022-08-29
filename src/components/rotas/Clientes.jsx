export const Clientes = () => {
    const clientes = [{
        id: 1,
                    nome: "Fulano" ,
                    sobrenome: "De tal",
                    telefone: "31999999999",
                    email: "email@email.com",
                    cep: "33333333",
                    endereco1: "Rua Qualquer coisa",
                    endereco2: "0, bairro qualquer coisa - MG",
                    nascimento: "31/05/1987",
                    cpf: "000.000.000-00",
                    renda: "3500.00"
    },
    {
        id: 2,
        nome: "Fulano" ,
        sobrenome: "De Tal",
        telefone: "31999999999",
        email: "email@email.com",
        cep: "33333333",
        endereco1: "Rua Qualquer coisa",
        endereco2: "0, bairro qualquer coisa - MG",
        nascimento: "31/05/1987",
        cpf: "000.000.000-00",
        renda: "3500.00"
    }];
  
    return (
      <ul>
        { clientes.map( (cliente) => <li key = { cliente.toString() }>{ cliente }</li>) }
      </ul>
    );
  }
  