import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import EmployeeTable from "./components/EmployeeTable";

function App() {
  return (
    <Wrapper>
      <Title>Employee Directory</Title>
      <EmployeeTable />
    </Wrapper>
  );
}

export default App;