import "./CellListItem.css";

import { Cell } from "../state";
import CodeCell from "./CodeCell";
import  TextEditor  from "./TextEditor";
import ActionBar from "./ActionBar";

interface CellListItemProps {
  cell: Cell;
  key: string;
}
const CellListItem: React.FC<CellListItemProps> = ( { cell } ) => {
  let child: JSX.Element;

  if(cell.type === "code") child = <CodeCell cell={cell} />;
  else child = <TextEditor cell={cell} />;

  return (
    <div className="cell-list-item">
      {child}
      <ActionBar id={cell.id} />
    </div>
  );
};

export default CellListItem;