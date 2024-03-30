import React from 'react';
import DepartmentVerticalNav from '../components/DepartmentVerticalNav';

const DepartmentLayout = ({ children }) => {
    return (
        <div style={{height: '100vh', width: '100vw'}} className="flex border-0 m-0 p-0">
            <DepartmentVerticalNav />
            <main className="flex-1">{children}</main>
        </div>
    );
};

export default DepartmentLayout;
