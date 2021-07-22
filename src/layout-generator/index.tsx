import React, { useState } from "react";
import RowView from './RowView'

interface LayoutProps{
  data: string
} 
const LayoutView: React.FC<LayoutProps> = ({data}): JSX.Element => {
    const rowValues: Array<string> = data.split("/").filter((row: string) => row.length > 0 && !isNaN(Number(row)));
    return (
        <div
        style={{
          width: 250,
          height: 250,
          display: "flex",
          flexDirection: "column",
          borderStyle: "solid",
          borderWidth: "1px",
          borderColor: "#000",
          overflow: "hidden",
          backgroundColor: "#d4d4d4"
        }}
      >
        <RowView rowValues={rowValues}/>
      </div>
    );
  };

  export default LayoutView