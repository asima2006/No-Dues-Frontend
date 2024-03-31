import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Role from '../pages/Filters/Role'
import { Avatar } from '@mui/material'
import logo from '/logo1.jpg'

const Header = ({ label }) => {
    return (
        <header className='bg-slate-200 shadow-md'>
            <div className='flex justify-between items-center max-w-7xl mx-auto p-2'>
                <Link to='/'>
                    <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                        <span className='text-slate-500'>EZ</span>
                        <span className='text-slate-700'>DUES</span>
                    </h1>
                </Link>
                <div style={{
                    fontSize: 'xx-large',
                    fontWeight: 600,
                    color: 'slategray'
                }}>
                    {label}
                </div>
                <div>
                    <Avatar alt="Remy Sharp" src={logo} />
                </div>
            </div>
        </header>
    )
}

export default Header
