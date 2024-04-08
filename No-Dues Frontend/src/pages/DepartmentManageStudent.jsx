import { FaSearch } from "react-icons/fa";
import CreateDueForm from "../components/CreateDueForm";
import GenericModal from "../components/GenericModal";
import React, { useEffect, useState } from "react";
import {
    Paper,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    TablePagination,
    Button,
    Typography,
    Divider,
    Link
} from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Filter = ({ setParam }) => {
    const [filter, setFilter] = useState({
        role: "",
        academic_program: "",
        joining_year: "",
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFilter((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? (checked ? 1 : 0) : value,
        }));
    };

    const handleClick = () => {
        setParam(filter);
        console.log(filter);
    };

    return (
        <div className="w-full border-b border-black">
            <div className="text-xl font-bold m-4">Filters</div>
            <div className="flex item-center">
                <div className="grid grid-cols-3 gap-4 p-4 w-5/6">
                    <div className="flex items-center">
                        <label className="mr-2">Academic Program:</label>
                        <input
                            name="academic_program"
                            type="text"
                            value={filter.academic_program}
                            onChange={handleChange}
                            className="border rounded p-2"
                        />
                    </div>
                    <div className="flex items-center">
                        <label className="mr-2">Role:</label>
                        <select
                            name="role"
                            value={filter.role}
                            onChange={handleChange}
                            className="border rounded p-2"
                        >
                            <option value="">Select Role</option>
                            <option value="B.Tech">B.Tech</option>
                            <option value="M.Tech">M.Tech</option>
                            <option value="Phd">PHD</option>
                        </select>
                    </div>
                    <div className="flex items-center">
                        <label className="mr-2">Joining Year:</label>
                        <input
                            name="joining_year"
                            type="text"
                            value={filter.joining_year}
                            onChange={handleChange}
                            className="border rounded p-2"
                        />
                    </div>
                </div>
                <div className="flex items-center col-span-2 justify-center w-1/6">
                    <button
                        onClick={handleClick}
                        className="bg-blue-500 text-white px-4 py-2 rounded-md"
                    >
                        Search <FaSearch className="ml-2" />
                    </button>
                </div>
            </div>
        </div>
    );
};


function StudentDetailModal({ row }) {
    return (
        <div className="p-4 space-y-2">
            <Typography variant="body1" className="mb-1"><strong>Roll Number:</strong> {row.roll_number}</Typography>
            <Typography variant="body1" className="mb-1"><strong>First Name:</strong> {row.first_name}</Typography>
            <Typography variant="body1" className="mb-1"><strong>Last Name:</strong> {row.last_name}</Typography>
            <Typography variant="body1" className="mb-1"><strong>Email:</strong> {row.email}</Typography>
            <Typography variant="body1" className="mb-1"><strong>Academic Program:</strong> {row.academic_program}</Typography>
            <Typography variant="body1" className="mb-1"><strong>Role:</strong> {row.role}</Typography>
            <Typography variant="body1" className="mb-1"><strong>Allow Certificate Generation:</strong> {row.allow_certificate_generation ? 'Yes' : 'No'}</Typography>
        </div>
    );
}

function StickyHeadTable({ rows, columns }) {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedRow, setSelectedRow] = useState(null);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleMenuOpen = (event, row) => {
        setSelectedRow(row);
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setSelectedRow(null);
    };

    return (
        <div className="container mx-auto">
            <div className="w-full overflow-hidden mt-10">
                <Paper sx={{ width: "100%", overflow: "hidden" }}>
                    <TableContainer sx={{ maxHeight: 440 }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>S. No.</TableCell>
                                    {columns.map((column) => (
                                        <TableCell
                                            key={column.id}
                                            align={column.align}
                                            className="min-w-[100px]"
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))}
                                    <TableCell>Certificate Generation</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row, rowIndex) => {
                                        return (
                                            <TableRow hover tabIndex={-1} key={rowIndex}>
                                                <TableCell>
                                                    {rowIndex + 1}
                                                </TableCell>
                                                {columns.map((column) => {
                                                    return (
                                                        <TableCell key={column.id} align={column.align}>
                                                            {row[column.id]}
                                                        </TableCell>
                                                    )
                                                }
                                                )}
                                                <TableCell style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                                                    <Button>
                                                        <GenericModal buttonName="Details">
                                                            <StudentDetailModal row={row} />
                                                        </GenericModal>
                                                    </Button>
                                                    <Button
                                                        style={{
                                                            backgroundColor: row.allow_certificate_generation ? '#F44336' : '#4CAF50',
                                                            color: 'white'
                                                        }}
                                                    >
                                                        {row.allow_certificate_generation ? 'Disable' : 'Enable'}
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[1, 2, 5, 10]}
                        component="div"
                        count={Math.floor(rows.length / rowsPerPage) + (rows.length % rowsPerPage > 0 ? 1 : 0)}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>
            </div>
        </div>
    );
}



const columns = [
    {
        id: "first_name",
        label: "First Name",
        minWidth: 100,
    },
    {
        id: "roll_number",
        label: "Roll Number",
        minWidth: 100,
    },
    {
        id: "role",
        label: "Role",
        minWidth: 100,
    },
];

const rows = [
        {
            "roll_number": "2101ee36",
            "first_name": "Heet",
            "last_name": "Dhorajiya",
            "email": "heet_2101ee36@iitp.ac.in",
            "academic_program": "Electrical and Electronincs Engineering",
            "role": "B.Tech",
            "allow_certificate_generation": true
        },
        {
            "roll_number": "2101ee37",
            "first_name": "Honey",
            "last_name": "Khatri",
            "email": "honey_2101ee37@iitp.ac.in",
            "academic_program": "Electrical and Electronincs Engineering",
            "role": "B.Tech",
            "allow_certificate_generation": false
        },
        {
            "roll_number": "2101ee34",
            "first_name": "Harman",
            "last_name": "Saluja",
            "email": "harman_2101ee34@iitp.ac.in",
            "academic_program": "Electrical and Electronincs Engineering",
            "role": "B.Tech",
            "allow_certificate_generation": false
        }
]

export default function DepartmentManageStudent() {
    const [param, setParam] = useState([]);
    return (
        <div style={{ height: '100vh', width: '100%', padding: '4px' }}>
            <Filter param={param} setParam={setParam} />
            {rows ? <StickyHeadTable rows={rows} columns={columns} /> : <div>Loading... </div>}
        </div>
    )
}