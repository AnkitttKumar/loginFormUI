import * as React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";

// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import "./UserForm.css";
// import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function UserForm() {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // useEffect(()=>{
  const onSubmit = () => {
    console.log("submit");
    Axios.post("http://localhost:3001/userForm", {
      name: name,
      dob: dob,
      email: email,
      phone: phone,
    }).then((res) => {
      console.log("done", res);
    });
  };
  // })
  // const style = {
  //   input: {
  //     width: "100%",
  //   },
  // };

  // console.log("name", name);
  return (
    <>
      <div className="container">
        <div className="p-5">
          <div
            className="p-5"
            style={{ border: "1px solid gray", borderRadius: "5px" }}
          >
            <div className="header">
              <span className="font-weight-bold" style={{ fontSize: "45px" }}>
                User Form
              </span>
            </div>
            <div className="p-2"></div>
            <div className="content">
              <div className="col-md-12 p-0">
                <div className="row">
                  <div className="col-md-6">
                    <label>Name</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="abc"
                      className="inputs"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="">Date of Birth</label>
                    <input
                      type="date"
                      id="dob"
                      placeholder="dob"
                      className="inputs"
                      onChange={(e) => {
                        setDob(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="p-2"></div>
                <div className="row">
                  <div className="col-md-6">
                    <label htmlFor="">Email</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="abc@web.com"
                      className="inputs"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="">Phone No</label>
                    <input
                      type="text"
                      id="phone"
                      placeholder="9999999999"
                      className="inputs"
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="p-2"></div>
                <div className="row">
                  <div className="col-md-6 d-flex justify-content-end">
                    <Button variant="contained" color="warning">
                      Clear
                    </Button>
                  </div>
                  <div className="col-md-6 d-flex justify-content-start">
                    {name && dob && email && phone ? (
                      <Button
                        variant="contained"
                        color="success"
                        onClick={() => {
                          onSubmit();
                          console.log(
                            "name",
                            name,
                            "dob",
                            dob,
                            "email",
                            email,
                            "phone",
                            phone
                          );
                        }}
                      >
                        Submit
                      </Button>
                    ) : (
                      <Button variant="contained" color="success" disabled>
                        Submit
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// <div className="container p-5">
//   <div
//     className=""
//     style={{ border: "1px solid gray", borderRadius: "5px" }}
//   >
//     <div className="header p-4">
//       <span className="font-weight-bold" style={{ fontSize: "45px" }}>
//         User Form
//       </span>
//     </div>
//     <div className="p-3">
//       <div className="col-md-12 ">
//         <div className="row">
//           <div className="col-md-5">
//             <TextField
//               id="outlined-basic"
//               label="Name"
//               variant="outlined"
//               fullWidth
//             />
//           </div>
//           <div className="col-md-5">
//             <TextField
//               id="outlined-basic"
//               label="Date of Birth"
//               variant="outlined"
//               fullWidth
//             />
//           </div>
//         </div>
//         <div className="p-3"></div>
//         <div className="row">
//           <div className="col-md-5">
//             <TextField
//               id="outlined-basic"
//               label="Email"
//               variant="outlined"
//               fullWidth
//             />
//           </div>
//           <div className="col-md-5">
//             <TextField
//               id="outlined-basic"
//               label="Phone No"
//               variant="outlined"
//               fullWidth
//             />
//           </div>
//         </div>
//         <div className="p-3">
//           <Button variant="outlined" color="warning">
//             Clear
//           </Button>
//           <Button variant="outlined" color="success">
//             submit
//           </Button>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
