import { ReactNode } from "react";

//styles
import "./index.scss";

interface table {
  tableHeader: string[];
  children?: ReactNode;
  textAlign?: "center" | "left" | "right";
}

export default function Table({ tableHeader, children, textAlign }: table) {
  return (
    <div className="table-container">
      <table className={`width-full text-align-${textAlign}`}>
        <thead>
          <tr>
            {tableHeader.map((item, index) => {
              return <th key={index}>{item}</th>;
            })}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}
