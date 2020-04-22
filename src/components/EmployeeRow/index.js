import React from "react";
import "./style.css";

function EmployeeRow(props) {
    return (
        <tr>
            <td>{props.id}</td>
            <td><img src={props.photo} alt="face"></img></td>
            <td>{props.login}</td>
            <td>{props.repos}</td>
        </tr>
    );
}

export default EmployeeRow;