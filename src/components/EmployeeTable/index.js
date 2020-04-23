import React from "react";
import "./style.css";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import TableHeader from "../TableHeader";
import TableRow from "../TableRow";
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
            <Container>
                <Table variant="dark" hover>
                    <TableHeader
                        header1="ID"
                        header2="Photo"
                        header3="Login"
                        header4="GitHub"
                    />
                    <tbody>
                        {
                            this.state.result.map(employee => (
                                <TableRow 
                                    key={employee.id}
                                    id={employee.id}
                                    photo={employee.avatar_url}
                                    login={employee.login}
                                    repos={employee.html_url}
                                />
                            ))
                        }
                    </tbody>
                </Table>
            </Container>
        );
    } 
}

export default EmployeeTable;