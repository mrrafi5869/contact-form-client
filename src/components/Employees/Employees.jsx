import React, { useEffect, useState } from "react";
import Employee from "./Employee";
import EmployeeUpdateModal from "../../EmployeeUpdateModal";

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [count, setCount] = useState([]);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(2);
  const [data, setData] = useState(null);
  const pages = Math.ceil(count / size);

  useEffect(() => {
    fetch(`http://localhost:5000/employees?page=${page}&size=${size}`)
      .then((res) => res.json())
      .then((data) => {
        setEmployees(data.employees);
        setCount(data.count);
      });
  }, [page, size]);
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra mx-auto mt-10">
        {/* head */}
        <thead>
          <tr>
            <th>Num</th>
            <th>Name</th>
            <th>Job</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Address</th>
            <th>Primary Contact</th>
            <th>Phone</th>
            <th>Relationship</th>
            <th>Secondary Contact</th>
            <th>Phone</th>
            <th>Relationship</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {employees &&
            employees?.map((employee, index) => (
              <Employee
                key={employee._id}
                index={index}
                employee={employee}
                setData={setData}
                data={data}
              ></Employee>
            ))}
        </tbody>
      </table>
      <div className="flex justify-center items-center mt-8">
          <div className="btn-group mr-3">
            {[...Array(pages).keys()].map((number) => (
              <button
                className={`btn btn-sm ${page === number && "btn-active"}`}
                key={number}
                onClick={() => setPage(number)}
              >
                {number + 1}
              </button>
            ))}
          </div>
          <select
            className="select select-bordered w-16 h-8"
            onChange={(event) => setSize(event.target.value)}
          >
            <option value="2" selected>2</option>
            <option value="4">
              4
            </option>
            <option value="6">6</option>
            <option value="10">10</option>
          </select>
        </div>
        {
          data && <EmployeeUpdateModal data={data}></EmployeeUpdateModal>
        }
    </div>
  );
};

export default Employees;
