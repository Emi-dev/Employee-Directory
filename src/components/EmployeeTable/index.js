import React from "react";
import "./style.css";
import EmployeeRow from "../EmployeeRow";
import API from "../../utils/API";

class EmployeeTable extends React.Component {
    state = {
        result: []
    }

    getEmployeeData = () => {
        API.search()
        .then(res => this.setState({result: res.data}))
        .catch(err => console.log(err));
    }

    componentDidMount = () => {
        this.getEmployeeData();
        console.log("result.data: ", this.state.result);
    }

    render() {
        return (
            <div className="container">
            <table className="table table-dark rounded">
                <tbody>
                    {
                        this.state.result.map(employee => (
                            <EmployeeRow 
                                key={employee.id}
                                id={employee.id}
                                photo={employee.avatar_url}
                                login={employee.login}
                                repos={employee.repos_url}
                            />
                        ))
                    }
                </tbody>
            </table>
            </div>
        );
    } 
}

export default EmployeeTable;