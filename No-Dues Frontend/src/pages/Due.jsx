import React, { useContext, useEffect, useState } from 'react'
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import StickyHeadTable from '../components/Table'
import Header from '../components/Nav';
import Role from '../components/Role';
import CreateDueForm from '../components/CreateDueForm';
import GenericModal from '../components/GenericModal';

const Due = () => {
    const context = useContext(authContext);
    const {rows, fetchDues} = context;
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    useEffect(()=>{
        fetchDues();
        // console.log(rows);
    },[]);
    return (
        <div>
            <Header/>

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
                <MenuItem>Hello</MenuItem>
            </Menu>
            <GenericModal
                buttonName="Open Modal"
                modalTitle="Example Modal"
            >
                <CreateDueForm />
            </GenericModal>
            <StickyHeadTable/>


        </div>
    )
}

export default Due
