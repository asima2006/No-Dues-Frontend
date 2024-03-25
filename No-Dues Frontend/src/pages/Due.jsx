import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import StickyHeadTable from '../components/Table'
import Header from '../components/Nav';
import Role from '../components/Role';

const Due = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
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
            </Menu>
            <StickyHeadTable/>
        </div>
    )
}

export default Due
