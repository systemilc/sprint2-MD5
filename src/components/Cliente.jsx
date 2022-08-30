import { data } from "./db/ListaCLientes";

const Row = ({ record }) => {
  return (
    <tr key={record.id}>
      <td>Data 1</td>
    </tr>
  );
};

export const Table = (data) => {
  const keys = Object.keys(data[0]);
  return (
    <table>
      <thead>
        {keys.map((key) => (
          <th key={key}>{key}</th>
        ))}
        <tr></tr>
      </thead>
      <tbody>
        {data.map((record) => {
          <Row record={record} />;
        })}
      </tbody>
    </table>
  );
};
