import { Table } from "../Cliente";
import { data } from "../db/ListaCLientes";

export const Clientes = () => {
  
  return (
    <Table data={data}/>
  );
};
