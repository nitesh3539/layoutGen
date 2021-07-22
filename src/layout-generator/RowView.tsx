import React, { useState } from "react";
import RowColView from './RowColView'
interface RowProps {
    rowValues: Array<string>
}
const RowView: React.FC<RowProps> = ({ rowValues }): JSX.Element => {
    return (<>
        {rowValues.map(
            (val, index) =>
            (
                <div
                    style={{
                        borderTopWidth: "1px",
                        borderTopStyle: index > 0 ? "solid" : "none",
                        borderTopColor: "#000",
                        width: "100%",
                        display: "flex",
                        height: `${100 / rowValues.length}%`
                    }}
                >
                    <RowColView col={Number(val)} />
                </div>
            )
        )}
    </>)

};

export default RowView