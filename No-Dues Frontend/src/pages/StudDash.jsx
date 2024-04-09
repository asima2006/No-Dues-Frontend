import React, { useContext, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import logo from "/logo1.jpg";
import SettingsIcon from '@mui/icons-material/Settings';
import {Button} from '@mui/material';
import StickyHeadTable from "../components/Table";
import checkDepartmentToken from "../service/checkDepartmentToken";
import { backendUri } from "../env";

const rows = [
  {
    "id": "f9f1a6d0-7b46-4cf9-b97c-de31ffd22d9e",
    "department": 'NSS',
    "no_of_dues": 10,
    "initiate_due_certificate": "success"
  }
];

const columns = [
  {
    id: "department",
    label: "Department",
    minWidth: 100,
  },
  {
    id: "no_of_dues",
    label: "No. of Due",
    minWidth: 100,
  },
  {
    id: "initiate_due_certificate",
    label: "Initiate No-Dues Certificate",
    minWidth: 100,
  },
];

const StudDash = () => {
  const studDetails = {
    depatment: "CBE",
    rollNo: "2201CB33",
    role: "BTech",
    phoneNo: "+91 7851941123",
    joining_Year: "2021",
    email: "2201cs55_name@iitp.ac.in",
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(()=>{
    const token = checkDepartmentToken();
    const fetchRecords = async () => {
      const res = await fetch(`${backendUri}/student/all-department-data-min`,{
        headers:{
          'Content-Type': 'application/json',
          'Authorization': token,
        }
      });
    }

    fetchRecords();
  },[]);

  return (
    <div style={{ border: "1px solid white", height: "100vh", width: "100vw" }}>
      <div
        style={{
          display: "flex",
          justifyContent: 'space-between',
          margin: "17px 92px 15px 106px",
        }}
      >
        <span style={{ fontSize: "xxx-large" }}>Dashboard</span>
        <div style={{display: 'flex', alignItems: 'center'}}>
        <SettingsIcon fontSize="large"/>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            display: "flex",
            height: "40vh",
            width: "95vw",
            backgroundColor: "rgba(217, 217, 217, 1)",
            borderRadius: "25px",
          }}
        >
          <div style={{ display: "flex", flex: "1" }}>
            <div
              id="1"
              style={{
                display: "flex",
                flexDirection: "column",
                flex: "1",
                borderRadius: "25px",
                width: "73%",
              }}
            >
              <div
                style={{
                  fontSize: "xx-large",
                  margin: "13px",
                  paddingLeft: "21px",
                }}
              >
                Your Name
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "5px",
                  alignItems: "center",
                }}
              >
                {Object.entries(studDetails).map(([key, value]) => (
                  <div
                    key={key}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      fontSize: "larger",
                      padding: "7px",
                      margin: "5px",
                    }}
                  >
                    <span style={{ marginRight: "11px" }}>
                      {capitalizeFirstLetter(key)}:
                    </span>
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div
              id="2"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "25px",
                width: "27%",
              }}
            >
              <Avatar
                alt="Remy Sharp"
                src={logo}
                sx={{ width: 143, height: 143 }}
              />
            </div>
          </div>
        </div>
      </div>
      <div style={{display: 'flex', justifyContent: 'center',margin: '15px'}}>
        <Button variant="contained" size="large" color="success" disableElevation={true} sx={{
          width: '21%',
          padding: '10px'
        }}>
          Quick Analysis
        </Button>
      </div>
      <StickyHeadTable rows={rows} columns={columns} isDep={false}/>
    </div>
  );
};

export default StudDash;
