import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";

const Employee = ({ employee, index, setData }) => {
  const {
    _id,
    name,
    job,
    phone,
    email,
    address,
    city,
    state,
    PContact,
    PPhone,
    relation,
    SContact,
    SPhone,
    SRelation,
  } = employee;
  // delete employee function
  const handleDelete = (_id) => {
    const confirm = window.confirm("Are you sure???");
    if (confirm) {
      fetch(`http://localhost:5000/employee/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            window.location.reload();
          }
        });
    }
  };
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{name}</td>
      <td>{job}</td>
      <td>{phone}</td>
      <td>{email}</td>
      <td>
        {address}, <br /> {city}, <br /> {state}
      </td>
      <td>{PContact}</td>
      <td>{PPhone}</td>
      <td>{relation}</td>
      <td>{SContact}</td>
      <td>{SPhone}</td>
      <td>{SRelation}</td>
      {/* modal for update */}
      <td>
        <label htmlFor="my-modal-3" onClick={() => setData(employee)}>
          <AiOutlineEdit className="cursor-pointer hover:text-xl transition-all"></AiOutlineEdit>
        </label>
      </td>
      <td onClick={() => handleDelete(_id)}>
        <AiOutlineDelete className="cursor-pointer hover:text-xl transition-all"></AiOutlineDelete>
      </td>
    </tr>
  );
};

export default Employee;
