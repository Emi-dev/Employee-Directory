import React from "react";

function TableHeader(props) {
    return (
        <thead>
        <tr>
            <th>{props.header1}</th>
            <th>{props.header2}</th>
            <th>{props.header3}</th>
            <th>{props.header4}</th>
        </tr>
        </thead>
    )
}

export default TableHeader;