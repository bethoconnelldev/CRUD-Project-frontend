import React, { useEffect, useState } from "react";
import { listEmployees } from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

const ListEmployeeComponent = () => {

  const [employees, setEmployees] = useState([]);

  const navigator = useNavigate();

  useEffect(() => {
    listEmployees().then((response) => {
      setEmployees(response.data);
    }).catch(error =>{
      console.error(error);
    });
  }, []);

  function addNewEmployee(){
    navigator('/add-employee')

  }

  return (
    <div className="container">
      <h2>List of Employees</h2>
      <button type="button" className="btn btn-success btn-rounded button mb-1" onClick={addNewEmployee} >
        Add Employee
      </button>
      <table className="table table-secondary table-striped table-bordered">
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee Email Id</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;
