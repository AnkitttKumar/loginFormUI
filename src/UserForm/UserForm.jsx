import * as React from "react";
// import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function UserForm() {
  return (
    <>
      <div className="container p-5">
        <div
          className=""
          style={{ border: "1px solid gray", borderRadius: "5px" }}
        >
          <div className="header p-4">
            <span className="font-weight-bold" style={{ fontSize: "45px" }}>
              User Form
            </span>
          </div>
          <div className="p-3">
            <div className="col-md-12 ">
              <div className="row">
                <div className="col-md-5">
                  <TextField
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    fullWidth
                  />
                </div>
                <div className="col-md-5">
                  <TextField
                    id="outlined-basic"
                    label="Date of Birth"
                    variant="outlined"
                    fullWidth
                  />
                </div>
              </div>
              <div className="p-3"></div>
              <div className="row">
                <div className="col-md-5">
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    fullWidth
                  />
                </div>
                <div className="col-md-5">
                  <TextField
                    id="outlined-basic"
                    label="Phone No"
                    variant="outlined"
                    fullWidth
                  />
                </div>
              </div>
              <div className="p-3">
                <Button variant="outlined" color="warning">
                  Clear
                </Button>
                <Button variant="outlined" color="success">
                  submit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
