import React, { useEffect, useState } from 'react';
import { Suspense } from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import StickyHeadTable from '../components/Table';
import Header from '../components/Nav';
import CreateDueForm from '../components/CreateDueForm';
import GenericModal from '../components/GenericModal';
import { getDepartmentDue } from '../service/fetchDepartmentDue';
import { useRecoilValue } from 'recoil';
import { authState } from '../context/auth/authState';
import { Button } from '@mui/base';
import { backendUri } from '../env';
import Filter from './Filters/Filter';


const Due = () => {
    const context = useRecoilValue(authState);
    const { token } = context;
    const [rows, setRows] = useState(null);
    const [param, setParam] = useState([]);
    const [loading, setLoading] = useState(true); // State to track loading

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        console.log(param);
        console.log(token);
        const fetchDepartmentDue = async () => {
            try {
                const rows = await getDepartmentDue(backendUri, token, param);
                console.log("Data fetched:", rows.data);
                setRows(rows.data);
                setLoading(false); // Set loading to false after fetching data
            } catch (error) {
                console.error('Error fetching department due:', error);
            }
        };

        fetchDepartmentDue();

    }, []); // Include rows in the dependency array

    return (
        <div style={{ height: '100vh', width: '100vw'}}>
            <Header />
            <Filter param = {param} setParam={setParam}/>
            <GenericModal
                buttonName="Open Modal"
                modalTitle="Example Modal"
            >
                <CreateDueForm />
            </GenericModal>
            {rows ? <StickyHeadTable rows={rows} /> : <div>Loading... </div>}

        </div>
    );
};

export default Due;
