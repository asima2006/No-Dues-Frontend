import React from 'react'
import { Sidebar, Menu, MenuItem, useProSidebar, SubMenu } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { FaSearch } from 'react-icons/fa';
import { FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';

const SllideBars = () => {
  const { collapseSidebar } = useProSidebar();
  return (
    <Sidebar style={{ height: "100vh" }}>
      <Menu>
        <MenuItem
          icon={<MenuOutlinedIcon />}
          onClick={() => {
            collapseSidebar();
          }}
          style={{ textAlign: "center" }}
        >
          {" "}
          <h1>Filter</h1>
        </MenuItem>
        <MenuItem>
          <form className='bg-slate-100 p-2 rounded-lg flex items-center'>
            <div style={{
              fontSize: 'x-large',
              paddingLeft: '1px',
              paddingRight: '21px'
            }}>
              <FaSearch className='text-slate-500' />
            </div>
            <div>
              <input type="text" placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64' />
            </div>
          </form>
        </MenuItem>
        <SubMenu icon={<HomeOutlinedIcon />} label="Role">
          <RadioGroup
            style={{
             display: 'flex',
              paddingLeft: '4vh'
            }}
            aria-labelledby="demo-radio-buttons-group-label"
            // defaultValue="BTech"
            name="radio-buttons-group"
          >
            <FormControlLabel value="BTech" control={<Radio />} label="BTech" />
            <FormControlLabel value="MTech" control={<Radio />} label="MTech" />
            <FormControlLabel value="PHD" control={<Radio />} label="PHD" />
          </RadioGroup>
        </SubMenu>
        <MenuItem icon={<PeopleOutlinedIcon />}>Team</MenuItem>
        <MenuItem icon={<ContactsOutlinedIcon />}>Contacts</MenuItem>
        <MenuItem icon={<ReceiptOutlinedIcon />}>Profile</MenuItem>
        <MenuItem icon={<HelpOutlineOutlinedIcon />}>FAQ</MenuItem>
        <MenuItem icon={<CalendarTodayOutlinedIcon />}>Calendar</MenuItem>
      </Menu>
    </Sidebar>
  )
}

export default SllideBars

