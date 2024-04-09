import React, { useContext, useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import logo from "/logo1.jpg";
import SettingsIcon from '@mui/icons-material/Settings';
import { Button } from '@mui/material';
import StickyHeadTable from "../components/Table";
import { backendUri } from "../env";
import checkStudentToken from "../service/checkStudentToken";

const columns = [
  {
    id: "department_name",
    label: "Department",
    minWidth: 100,
  },
  {
    id: "total_pending_dues",
    label: "No. of Due",
    minWidth: 100,
  },
  {
    id: "allow_certificate_generation",
    label: "Initiate No-Dues Certificate",
    minWidth: 100,
  },
];

const StudDash = () => {
  const [rows, setRows] = useState([]);
  const [stud, setStud] = useState({});
  const [studname, setStudname] = useState("");

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    const token = checkStudentToken();
    const fetchRecords = async () => {
      const res = await fetch(`${backendUri}/student/all-department-data-min`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token,
        }
      });
      if (res.ok) {
        const data = await res.json();
        setRows(data);
        // console.log(data);
      } else {
        console.log("Unable to fetch");
      }
    }
    const fetchStudDetails = async () => {
      const res = await fetch(`${backendUri}/student/login`, {
        headers: {
          'content-type': 'application/json',
          "Authorization": token,
        }
      });

      const data = await res.json();
      setStudname(data.full_name);
      setStud(data.data);
      // console.log(data);
    }

    fetchRecords();
    fetchStudDetails();
  }, []);

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
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <SettingsIcon fontSize="large" />
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
                  margin: "18px",
                  paddingLeft: "33px",
                }}
              >
                {studname}
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "5px",
                  alignItems: "center",
                }}
              >
                {Object.entries(stud).map(([key, value]) => (
                  <div
                    key={key}
                    style={{
                      display: "flex",
                      fontSize: "larger",
                      padding: "7px",
                      margin: "5px",
                      paddingLeft: '106px'
                    }}
                  >
                    <span style={{ marginRight: "11px" }}>
                      {key === "roll_number" ? "Roll Number" :
                        (key === "joining_year" ? "Joining Year" : capitalizeFirstLetter(key))
                      }:{' '}
                    </span>
                    <span>{key === "roll_number" ? value.toUpperCase() : value}</span>
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
      <div style={{ display: 'flex', justifyContent: 'center', margin: '15px' }}>
        <Button variant="contained" size="large" color="success" disableElevation={true} sx={{
          width: '21%',
          padding: '10px'
        }}>
          Quick Analysis
        </Button>
      </div>
      <div></div>
      {rows.length > 0 ? <StickyHeadTable rows={rows} columns={columns} isDep={false} isDash={true}/> : ""}
    </div>
  );
};

export default StudDash;
