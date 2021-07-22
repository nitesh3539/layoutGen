import React, { useState } from "react";
interface RowColProps {
  col: number
}
const RowColView: React.FC<RowColProps> = ({col}): JSX.Element => {
  const columns = Array.from(Array(col).keys());
  return (
  <>
    {columns.map((k, index) => (
    <div
      style={{
        width: `${100 / col}%`,
        borderLeftWidth: "1px",
        borderLeftStyle: index > 0 ? "solid" : "none",
        borderLeftColor: "#000"
      }}
    ></div>
  ))}
  </>
  )
  };

  export default RowColView