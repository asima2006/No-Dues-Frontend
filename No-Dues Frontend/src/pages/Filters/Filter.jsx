import React, { useState } from "react";
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { FaSearch } from "react-icons/fa";
import GenericModal from "../../components/GenericModal";
import CreateDueForm from "../../components/CreateDueForm";

const Filter = ({setParam}) => {
  const [selectedRole, setSelectedRole] = useState(null);

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
  };

  const [filter, setFilter] = useState({
    dep_name: "",
    due_amount: "",
    role: '',
    academic_program: "",
    is_Active: 0,
    start_date: "",
    end_date: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilter((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? (checked ? 1 : 0) : value,
    }));
  };

  const handleClick = () => {
    setParam(filter);
    console.log(filter);
  }

  return (
    <>
      <div style={{ display: 'flex', width: '79vw', borderBottom: '1px solid grey' }}>
        <div style={{ borderRight: '1px solid grey' }}>
          <div
            style={{
              display: "flex",
              fontSize: "x-large",
              margin: "4px",
              marginLeft: "16px",
            }}
          >
            Filters
          </div>
          <div
            style={{
              height: "22vh",
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gridGap: "0px",
              gridAutoRows: "minmax(73px, auto)",
            }}>
            <div style={{
              gridRow: "1 / span 1", gridColumn: "1 / span 1", display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <TextField
                name="dep_name"
                label=" Dept. Name"
                type="text"
                value={filter.dep_name}
                onChange={handleChange}
              />
            </div>
            <div style={{
              gridRow: "1 / span 1", gridColumn: "2 / span 1", display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <TextField
                name="due_amount"
                label="Due Amount"
                type="text"
                value={filter.due_amount}
                onChange={handleChange}
              />
            </div>
            <div style={{
              gridRow: "1 / span 1", gridColumn: "3 / span 1", display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Role</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={filter.role}
                    name="role"
                    label="Role"
                    onChange={handleChange}
                  >
                    <MenuItem value='BTech'>B.Tech</MenuItem>
                    <MenuItem value="MTech">M.Tech</MenuItem>
                    <MenuItem value="PHD">PHD</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
            <div style={{
              gridRow: "1 / span 1", gridColumn: "4 / span 1", display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Program</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={filter.academic_program}
                    name="academic_program"
                    label="Program"
                    onChange={handleChange}
                  >
                    <MenuItem value='CSE'>CSE</MenuItem>
                    <MenuItem value="CBE">CBE</MenuItem>
                    <MenuItem value="EEE">EEE</MenuItem>
                    <MenuItem value="MNC">MNC</MenuItem>
                    <MenuItem value="MME">MME</MenuItem>
                    <MenuItem value="ME">ME</MenuItem>
                    <MenuItem value="CE">CE</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
            <div style={{
              gridRow: "2 / span 1", gridColumn: "1 / span 1", display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <TextField
                name="start_date"
                type="date"
                value={filter.start_date}
                onChange={handleChange}
              />
            </div>
            <div style={{
              gridRow: "2 / span 1", gridColumn: "2 / span 1", display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <TextField
                name="end_date"
                type="date"
                value={filter.end_date}
                onChange={handleChange}
              />
            </div>
            <div style={{
              gridRow: "2 / span 1", gridColumn: "3 / span 1", display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <div style={{
                display: 'flex', display: 'flex',
                width: '10vw',
                justifyContent: 'center',
                borderRadius: '25px',
                background: 'rgba(119, 136, 153, 0.19)'
              }}>
                <div style={{ marginRight: '14px' }}>
                  <label htmlFor="isActiveCheckbox">Is Active</label>
                </div>
                <input
                  type="checkbox"
                  id="isActiveCheckbox"
                  name="is_Active"
                  checked={filter.is_Active === 1}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div style={{
              gridRow: "2 / span 1", gridColumn: "4 / span 1", display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: "98%",
            }}>
              <form className="bg-slate-100 p-2 rounded-lg flex items-center">
                <div>
                  <input
                    type="text"
                    placeholder="Search..."
                    className="bg-transparent focus:outline-none w-20 sm:w-64"
                  />
                </div>
                <FaSearch className="text-slate-500" />
              </form>
            </div>
          </div>
        </div>
        <div style={{
          display: 'flex',
          width: '15%',
          justifyCcontent: 'center',
          alignItems: 'center'
        }}>
          <div style={{
            fontFamily: 'monospace',
            padding: '12px',
            marginLeft: '14px',
            fontSize: 'x-large',
            backgroundColor: "#001789c9",
            borderRadius: '25px',
            color: 'white'
          }}>
            <button onClick={handleClick}>
              <GenericModal
                buttonName="Open Modal"
                modalTitle="Example Modal"
              >
                <CreateDueForm />
              </GenericModal>
            </button>
          </div>
        </div >
      </div >
    </>
  );
};

export default Filter;
