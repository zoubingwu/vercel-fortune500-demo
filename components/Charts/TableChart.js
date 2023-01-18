import { Table } from "@mantine/core";
import style from "./TableChart.module.css";

export const TableChart = ({ data, columns }) => {
  console.log(data);
  const titles = (
    <tr>
      {Object.values(columns).map((value, i) => (
        <th key={i} className={style.thead_tr_th}>
          {value.col}
        </th>
      ))}
    </tr>
  );

  const rows = data.map((element,i) => (
    <tr key={i}>
      {Object.values(element).map((v, i) => (
        <td key={i} className={style.tbody_tr_td}>
          {v}
        </td>
      ))}
    </tr>
  ));

  return (
    <div className={style.root}>
      <Table className={style.table}>
        <thead>{titles}</thead>
        <tbody>{rows}</tbody>
      </Table>
    </div>
  );
};
