import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";

const EmployeeUpdateModal = ({ data, setData }) => {
  const {
    _id,
    name,
    job,
    email,
    address,
    city,
    state,
    PContact,
    relation,
    SContact,
    SRelation,
  } = data;
  const [phoneValue, setPhoneValue] = useState("");
  const [primaryPhoneValue, setPrimaryPhoneValue] = useState("");
  const [secondaryPhoneValue, setSecondaryPhoneValue] = useState("");

  const handlePhoneInputChange = (value) => {
    setPhoneValue(value);
  };
  const handlePrimaryPhoneInputChange = (value) => {
    setPrimaryPhoneValue(value);
  };
  const handleSecondaryPhoneInputChange = (value) => {
    setSecondaryPhoneValue(value);
  };
  // handle update function
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const job = form.job.value;
    const email = form.email.value;
    const address = form.address.value;
    const city = form.city.value;
    const state = form.state.value;
    const PContact = form.PContact.value;
    const PPhone = primaryPhoneValue;
    const relation = form.relation.value;
    const SContact = form.SContact.value;
    const SPhone = secondaryPhoneValue;
    const SRelation = form.SRelation.value;
    const updatedEmployee = {
      name,
      job,
      phoneValue,
      email,
      address,
      city,
      state,
      PContact,
      primaryPhoneValue,
      PPhone,
      relation,
      SContact,
      secondaryPhoneValue,
      SPhone,
      SRelation,
    };
    // update employee function
    fetch(`http://localhost:5000/employee/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedEmployee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("updated successfully");
          window.location.reload();
          setData(null);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative w-[800px]">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="hero min-h-screen">
            <div>
              <div className="text-center">
                <h1 className="text-3xl mb-4">Update Employee Details</h1>
              </div>
              <hr />
              <div className="card shadow-2xl bg-base-100 mt-5">
                <form onSubmit={handleUpdate} className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Employee Full Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Type your answer here"
                      className="input input-bordered"
                      defaultValue={name}
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Job Title</span>
                    </label>
                    <input
                      type="text"
                      name="job"
                      placeholder="Type your answer here"
                      className="input input-bordered"
                      defaultValue={job}
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Phone Number</span>
                    </label>
                    <PhoneInput
                      value={phoneValue}
                      onChange={handlePhoneInputChange}
                      inputProps={{
                        name: "phone",
                        required: true,
                        autoFocus: true,
                      }}
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="text"
                      name="email"
                      placeholder="mrrafi5869@gmail.com"
                      className="input input-bordered"
                      defaultValue={email}
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Address</span>
                    </label>
                    <textarea
                      className="textarea textarea-bordered"
                      rows="3"
                      cols="30"
                      placeholder="Type your answer here"
                      name="address"
                      defaultValue={address}
                      required
                    ></textarea>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">City</span>
                    </label>
                    <input
                      type="text"
                      name="city"
                      placeholder="Type your answer here"
                      className="input input-bordered"
                      defaultValue={city}
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">State</span>
                    </label>
                    <input
                      type="text"
                      name="state"
                      placeholder="Type your answer here"
                      className="input input-bordered"
                      defaultValue={state}
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">
                        Primary Emergency Contact
                      </span>
                    </label>
                    <input
                      type="text"
                      name="PContact"
                      placeholder="Mohammad Rafi"
                      className="input input-bordered"
                      defaultValue={PContact}
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Phone Number</span>
                    </label>
                    <PhoneInput
                      value={primaryPhoneValue}
                      onChange={handlePrimaryPhoneInputChange}
                      inputProps={{
                        name: "phone",
                        required: true,
                        autoFocus: true,
                      }}
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Relationship</span>
                    </label>
                    <input
                      type="text"
                      name="relation"
                      placeholder="Type your answer here"
                      className="input input-bordered"
                      defaultValue={relation}
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">
                        Secondary Emergency Contact
                      </span>
                    </label>
                    <input
                      type="text"
                      name="SContact"
                      placeholder="Mohammad Rafi"
                      className="input input-bordered"
                      defaultValue={SContact}
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Phone Number</span>
                    </label>
                    <PhoneInput
                      value={secondaryPhoneValue}
                      onChange={handleSecondaryPhoneInputChange}
                      inputProps={{
                        name: "phone",
                        required: true,
                        autoFocus: true,
                      }}
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Relationship</span>
                    </label>
                    <input
                      type="text"
                      name="SRelation"
                      placeholder="Type your answer here"
                      className="input input-bordered"
                      defaultValue={SRelation}
                      required
                    />
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-primary">Update</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeUpdateModal;
