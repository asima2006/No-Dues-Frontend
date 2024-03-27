import React from 'react';

const useStyles = {
    linkButton: {
        textDecoration: 'none',
        display: 'block',
        padding: '10px',
        // textAlign: 'center',
    },
    logoutButton: {
        backgroundColor: '#08F96B',
        borderRadius: '5.20px',
        padding: '10px 20px',
        border: 'none',
    },
    test: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '250px',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRight: '1px solid black', // Only right border
        position: 'relative',
    },
    logo: {
        padding:'10px',
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '20px',
    },
    logoutButtonWrapped: {
        display: 'flex',
        width: '100%',
        height: '60px',
        justifyContent: 'center',
        alignItems: 'center',
    },
};

const pageLinkData = [
    {
        'title': "Home",
        'link': "/home"
    },
    {
        'title': "Dues Page",
        'link': "/dues"
    },
    {
        'title': "Communication Page",
        'link': "/home"
    },
    {
        'title': "Communication Page",
        'link': "/home"
    },
    {
        'title': "Certificates",
        'link': "/home"
    },
    {
        'title': "Manage Students",
        'link': "/home"
    },
    {
        'title': "Requests",
        'link': "/home"
    },
    {
        'title': "Settings",
        'link': "/home"
    }
];

const DepartmentNavbar = () => {
    const logout = async () => {
        console.log("clicked");
    }

    return (
        <div style={useStyles.test}>
            <h2 style={useStyles.logo}>Ezdues</h2>
            <div className="linkButtons">
                {pageLinkData.map((data, index) =>
                    <a key={index} href={data.link} className="linkButton" style={useStyles.linkButton}>
                        {data.title}
                    </a>
                )}
            </div>
            <div className="logoutButtonWrapped" style={useStyles.logoutButtonWrapped}>
                <button className="logoutButton" style={useStyles.logoutButton} onClick={logout}>
                    Logout
                </button>
            </div>
        </div>
    );
};

export default DepartmentNavbar;
