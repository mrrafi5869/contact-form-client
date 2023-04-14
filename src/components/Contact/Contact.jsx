import React, { useState } from "react";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Link } from "react-router-dom";

const Contact = () => {
  const [phoneValue, setPhoneValue] = useState("");
  const [primaryPhoneValue, setPrimaryPhoneValue] = useState("");
  const [secondaryPhoneValue, setSecondaryPhoneValue] = useState("");
  // phone value
  const handlePhoneInputChange = (value) => {
    setPhoneValue(value);
  };
  // Primary phone value
  const handlePrimaryPhoneInputChange = (value) => {
    setPrimaryPhoneValue(value);
  };
  // secondary phone value
  const handleSecondaryPhoneInputChange = (value) => {
    setSecondaryPhoneValue(value);
  };
  // form submit function
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const job = form.job.value;
    const phone = phoneValue;
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
    const employee = {
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
    };
    // post employee
    fetch("http://localhost:5000/employeeDetails", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(employee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div>
        <div className="text-center">
          <h1 className="text-5xl mb-4">Employee Contact Form</h1>
        </div>
        <hr className="mb-12 border-b border-gray-300" />
        <div className="card w-[800px] shadow-2xl bg-base-100">
          <form onSubmit={handleFormSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Employee Full Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Type your answer here"
                className="input input-bordered"
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
                required
              />
            </div>
            <div className="flex justify-between">
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
                  required
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Primary Emergency Contact</span>
              </label>
              <input
                type="text"
                name="PContact"
                placeholder="Mohammad Rafi"
                className="input input-bordered"
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
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Secondary Emergency Contact</span>
              </label>
              <input
                type="text"
                name="SContact"
                placeholder="Mohammad Rafi"
                className="input input-bordered"
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
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Submit</button>
            </div>
            {/* All employees in this route */}
            <Link
              className="font-semibold text-blue-600 hover:text-blue-500 transition-all flex items-center justify-end"
              to="/employees"
            >
              All Employees{" "}
              <HiOutlineArrowSmRight className="text-xl"></HiOutlineArrowSmRight>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
