import { useTypedSelector } from "../hooks";
import CellListItem from "./CellListItem";

const CellList: React.FC = () => {
  const cells = useTypedSelector(({ cells: { order, data } }) =>
    order.map((id) => data[id])
  );

  const renderedCells = cells.map((cell) => <CellListItem cell={cell} key={cell.id}/>);

  return (
    <div>
      { renderedCells }
    </div>
  );
};

export default CellList;