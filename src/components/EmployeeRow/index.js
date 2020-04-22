import React from "react";
import "./style.css";
import Image from "react-bootstrap/Image";

function EmployeeRow(props) {
    return (
        <tr>
            <td>{props.id}</td>
            <td><Image src={props.photo} alt="face" roundedCircle></Image></td>
            <td>{props.login}</td>
            <td>{props.repos}</td>
        </tr>
    );
}

export default EmployeeRow;