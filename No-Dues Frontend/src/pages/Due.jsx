import React, { useEffect, useState } from 'react';
import { Suspense } from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import StickyHeadTable from '../components/Table';
import Header from '../components/Nav';
import Role from '../components/Role';
import CreateDueForm from '../components/CreateDueForm';
import GenericModal from '../components/GenericModal';
import { getDepartmentDue } from '../service/fetchDepartmentDue';
import { useRecoilValue } from 'recoil';
import { authState } from '../context/auth/authState';
import { Button } from '@mui/base';
import SllideBars from './SllideBar';

const Due = () => {
    const context = useRecoilValue(authState);
    const { token } = context;
    const [rows, setRows] = useState(null);
    const [loading, setLoading] = useState(true); // State to track loading

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const filters = {};
    useEffect(() => {
        const host = "http://localhost:8000";
        // console.log(token);
        const fetchDepartmentDue = async () => {
            try {
                const rows = await getDepartmentDue(host, token, filters);
                // console.log("Data fetched:", rows.data);
                setRows(rows.data);
                setLoading(false); // Set loading to false after fetching data
            } catch (error) {
                console.error('Error fetching department due:', error);
            }
        };

        fetchDepartmentDue();

    }, []); // Include rows in the dependency array

    return (
        <div>
            <Header />
            <SllideBars/>
            {/* <Button
                variant='contained'
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                Role
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>B.Tech</MenuItem>
                <MenuItem onClick={handleClose}>M.Tech</MenuItem>
                <MenuItem onClick={handleClose}>PHD</MenuItem>
            </Menu> */}
            {/* <GenericModal
                buttonName="Open Modal"
                modalTitle="Example Modal"
            >
                <CreateDueForm />
            </GenericModal>
            {rows ? <StickyHeadTable rows={rows} /> : <div>Loading... </div>} */}

        </div>
    );
};

export default Due;
