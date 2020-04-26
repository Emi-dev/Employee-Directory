import React from "react";
import "./style.css";
import { Table } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Title from "../Title";
import SearchForm from "../SearchForm";
import TableBody from "../TableBody";
import TableHeader from "../TableHeader";
import API from "../../utils/API";

class EmployeeDirectory extends React.Component {
    state = {
        employees: [],
        search: ""
    }

    componentDidMount = () => {
        this.getEmployeeData();
    }
    
    getEmployeeData = () => {
        API.search()
        .then(res => {
            const empList = this.createEmpList(res.data.data);
            this.setState({employees: empList});
        })
        .catch(err => console.log(err));
    }

    // Create and return a list(array) of employee data objects with id, name(full), photo, and email properties.
    createEmpList = list => {
        return list.map(emp => {
            const empData = {
                id: emp.id,
                name: `${emp.first_name} ${emp.last_name}`,
                photo: emp.avatar,
                email: emp.email
            }
            return empData;
        });
    }

    // Create and return a filtered list of employees.
    createFilteredEmpList = list => {
        let filteredList = list.filter(item => {
            return item.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        });
        return filteredList;
    }

    handleInput = event => {
        this.setState({search: event.target.value});
    }

    render() {
        let filteredEmpList = this.createFilteredEmpList(this.state.employees);

        return (
            <div>
                <Title>Employee Directory</Title>
                <Container>
                    <SearchForm
                        handleInput={this.handleInput}
                    />
                </Container>
                <Container>
                    <Table variant="dark" hover>
                        <TableHeader
                            header1="ID"
                            header2="Photo"
                            header3="Name"
                            header4="Email"
                        />
                        <TableBody
                            filteredEmpList={filteredEmpList}
                        />
                    </Table>
                </Container>
            </div>
        );
    } 
}

export default EmployeeDirectory;