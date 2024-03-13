import React from 'react'
import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='bg-slate-200 shadow-md'>
            <div className='flex justify-between items-center max-w-7xl mx-auto p-2'>
                <Link to='/'>
                    <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                        <span className='text-slate-500'>NO</span>
                        <span className='text-slate-700'>Dues</span>
                    </h1>
                </Link>
                {/* <form className='bg-slate-100 p-2 rounded-lg flex items-center'>
                    <input type="text" placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64' />
                    <FaSearch className='text-slate-500' />
                </form> */}
            </div>
        </header>
    )
}

export default Header
