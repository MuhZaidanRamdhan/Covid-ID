import styles from "./Table.module.css";

function Table(props) {
  const { kota, kasus, sembuh, dirawat, meninggal, no} = props;
  return (
    <>
        <tbody>
          <tr>
            <td>{no}</td>
            <td>{kota}</td>
            <td>{kasus}</td>
            <td>{sembuh}</td>
            <td>{meninggal}</td>
            <td>{dirawat}</td>
          </tr>
        </tbody>
    </>
  );
}

export default Table;
