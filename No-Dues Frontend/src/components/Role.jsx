import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { backendUri } from '../env';

const Role = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const fetchAPI = async (role) => {
    const res = await fetch(`${backendUri}/`)
  }
  const handleClose = (menuItem) => {
    setAnchorEl(null);
    switch (menuItem) {
      case 'B.Tech':
        console.log('B.Tech selected');
        toast('BTech');
        break;
      case 'M.Tech':
        console.log('M.Tech selected');
        break;
      case 'Ph.D':
        console.log('Ph.D selected');
        break;
      default:
    }
  };



  return (
    <div>
      <Button
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
        <MenuItem onClick={() => handleClose('B.Tech')}>B.Tech</MenuItem>
        <MenuItem onClick={() => handleClose('M.Tech')}>M.Tech</MenuItem>
        <MenuItem onClick={() => handleClose('Ph.D')}>Ph.D</MenuItem>
      </Menu>
    </div>
  );
}

export default Role;