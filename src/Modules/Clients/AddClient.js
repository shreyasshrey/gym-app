import React, { useState } from 'react';
import Select from 'react-select';
// import Modal from 'react-modal';
// import { CloseIcon } from "../../../Utils/Icons";
// import { createCustomer, updateCustomer } from "../../ApiServices/CustomerApi";
// import { toast } from "react-toastify";
// import moment from "moment/moment";
// import { customStyle } from "./../Utils/DropdownStyles";
import './AddClient.css';

// const customStyles = {
//   overlay: {
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: 'rgba(0, 0, 0, 0.75)',
//     zIndex: 999,
//   },
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//     width: '85%',
//     // height: "100%",
//     padding: 0,
//     borderRadius: '0',
//     border: 'none',
//   },
// };

const AddClient = () =>
  // {
  //   openCustomer,
  //   setOpenCustomer,
  //   editCustomers,
  //   setEditCustomers,
  //   isEdit,
  //   setIsEdit,
  //   setIsLoading,
  // }
  {
    // const setDropdownValue = (val) => {
    //   return {
    //     label: val.charAt(0).toUpperCase() + val.slice(1),
    //     value: val,
    //   };
    // };

    const [formData, setFormData] = useState({
      // phoneNumber:
      //   editCustomers && editCustomers["phoneNumber"]
      //     ? editCustomers["phoneNumber"]
      //     : "",
      // firstName:
      //   editCustomers && editCustomers["firstName"]
      //     ? editCustomers["firstName"]
      //     : "",
      // lastName:
      //   editCustomers && editCustomers["lastName"]
      //     ? editCustomers["lastName"]
      //     : "",
      // email:
      //   editCustomers && editCustomers["email"] ? editCustomers["email"] : "",
      // gender:
      //   editCustomers && editCustomers["gender"]
      //     ? setDropdownValue(editCustomers["gender"])
      //     : "",
      // dateOfBirth:
      //   editCustomers && editCustomers["dateOfBirth"]
      //     ? moment(editCustomers["dateOfBirth"]).utc().format("YYYY-MM-DD")
      //     : "",
      // location:
      //   editCustomers && editCustomers["location"]
      //     ? editCustomers["location"]
      //     : "",
      // startDate:
      //   editCustomers && editCustomers["startDate"]
      //     ? setDropdownValue(editCustomers["startDate"])
      //     : "",
      // address:
      //   editCustomers && editCustomers["address"] ? editCustomers["address"] : "",
      // customerNote:
      //   editCustomers && editCustomers["customerNote"]
      //     ? editCustomers["customerNote"]
      //     : "",
      firstName: '',
      lastName: '',
      gender: '',
      phoneNumber: '',
      email: '',
      age: '',
      location: '',
      dateOfBirth: '',
      startDate: '',
      address: '',
      customerNote: '',
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const cancelCustomer = () => {
      setFormData({
        phoneNumber: '',
        firstName: '',
        lastName: '',
        email: '',
        age: '',
        gender: '',
        dateOfBirth: '',
        location: '',
        startDate: '',
        address: '',
        customerNote: '',
      });
      // setOpenCustomer(false);
      // setEditCustomers();
      // setIsEdit(false);
    };

    //   const transformedCustomer = (data, isEdit) => {
    //     if (isEdit) {
    //       let customerDetails = {
    //         id: isEdit ? editCustomers.id : 0,
    //         firstName: data.firstName,
    //         lastName: data.lastName,
    //         email: data.email,
    // age:data.age,
    //         phoneNumber: data.phoneNumber,
    //         gender: data.gender.value,
    //         dateOfBirth: data.dateOfBirth ? data.dateOfBirth : "",
    //         location: data.location,
    //         address: data.address,
    //         startDate: data.startDate.value,
    //         customerNote: data.customerNote,
    //         isActive: true,
    //       };
    //       return customerDetails;
    //     } else {
    //       let customerDetails = {
    //         id: 0,
    //         firstName: data.firstName,
    //         lastName: data.lastName,
    //         email: data.email,
    //   age:data.age,
    //         phoneNumber: data.phoneNumber,
    //         gender: data.gender.value,
    //         dateOfBirth: data.dateOfBirth ? data.dateOfBirth : null,
    //         location: data.location,
    //         address: data.address,
    //         startDate: data.startDate.value,
    //         customerNote: data.customerNote,
    //         isActive: true,
    //       };
    //       return customerDetails;
    //     }
    //   };

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(formData);
      // let customerDetails = transformedCustomer(formData, isEdit);
      // // console.log(customerDetails);
      // try {
      //   if (isEdit) {
      //     setIsLoading(true);
      //     const results = await updateCustomer(customerDetails);
      //     if (results.status === 200) {
      //       toast.success("Customer Updated Successfully");
      //       // setIsEdit(false);
      //       // setEditCustomers()
      //       // setOpenCustomer(false);
      //       cancelCustomer()
      //       setIsLoading(false);
      //       // location("/patient-list")
      //     }
      //   } else {
      //     setIsLoading(true);
      //     const results = await createCustomer(customerDetails);
      //     if (results.status === 200) {
      //       toast.success("Customer Added Successfully");
      //       setOpenCustomer(false);
      //       setIsLoading(false);
      //       // location("/patient-list")
      //     }
      //   }
      //   setOpenCustomer(false);
      // } catch (err) {
      //   toast.error("Cannot Add Customer Details");
      //   console.log("Error in submitting the Customer Details");
      //   // setIsLoading(false)
      // }
    };

    const options = [
      { label: 'Male', value: 'male' },
      { label: 'Female', value: 'female' },
      { label: 'Other', value: 'other' },
    ];

    // const beautyOptions = [
    //   { label: 'Yes', value: 'yes' },
    //   { label: 'No', value: 'no' },
    // ];

    // const suitOptions = [
    //   { label: 'Suraj', value: 'suraj' },
    //   { label: 'Shreyu', value: 'shreyu' },
    // ];

    return (
      // <Modal
      //   isOpen={openCustomer}
      //   onRequestClose={() => setOpenCustomer(false)}
      //   style={customStyles}
      //   contentLabel="Example Modal"
      //   ariaHideApp={false}
      // >
      <div className="customer-modal">
        <div className="customer-modal-header">
          <div className="title">Add Customer</div>
          <div className="close-btn" onClick={() => cancelCustomer()}>
            {/* <CloseIcon /> */}
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="customer-modal-body">
            <div className="row mb-2">
              <div className="col-sm-4 add-modal-input">
                <label>First Name:</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  // className="form-control"
                />
              </div>
              <div className="col-sm-4 add-modal-input">
                <label>Last Name:</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  // className="form-control"
                />
              </div>
              <div className="col-sm-4 add-modal-input">
                <label>Gender:</label>
                <Select
                  // name='gender'
                  value={formData.gender}
                  onChange={(option) =>
                    setFormData({ ...formData, gender: option })
                  }
                  // onChange={handleChange}
                  options={options}
                  className="select"
                  //   styles={customStyle}
                  required
                />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-sm-4 add-modal-input">
                <label>Mobile Number:</label>
                <input
                  type="number"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  // className="form-control"
                />
              </div>
              <div className="col-sm-4 add-modal-input">
                <label>Email ID:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  // className="form-control"
                />
              </div>
              <div className="col-sm-4 add-modal-input">
                <label>Age:</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                  // className="form-control"
                />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-sm-4 add-modal-input">
                <label>Package:</label>
                <Select
                  // name='gender'
                  value={formData.package}
                  onChange={(option) =>
                    setFormData({
                      ...formData,
                      package: option,
                    })
                  }
                  // onChange={handleChange}
                  options={options}
                  className="select"
                  //   styles={customStyle}
                  required
                />
              </div>
              <div className="col-sm-4 add-modal-input">
                <input
                  type="radio"
                  id="current"
                  name="start_date"
                  value="current"
                />
                <label htmlFor="current">Current</label>
                <input
                  type="radio"
                  id="fixed"
                  name="start_date"
                  value="fixed"
                />
                <label htmlFor="fixed">Fixed Start Date</label>
              </div>
              <div className="col-sm-4 add-modal-input">
                <label>Start Date:</label>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  required
                  // className="form-control"
                />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-sm-4 add-modal-input">
                <label>Address:</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  // className="form-control"
                ></textarea>
              </div>
              <div className="col-sm-4 add-modal-input">
                <label>Location:</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  // required
                  // className="form-control"
                />
              </div>
            </div>
          </div>
          <div className="customer-modal-footer">
            <button
              className="cancel-customer-btn"
              onClick={() => cancelCustomer()}
            >
              Cancel
            </button>
            <button type="submit" className="add-customer-btn">
              Submit
            </button>
          </div>
        </form>
      </div>
      // </Modal>
    );
  };

export default AddClient;
