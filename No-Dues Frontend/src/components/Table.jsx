import React, { useState } from "react";
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Menu,
  MenuItem,
  TablePagination,
  Button,
  IconButton,
} from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';

const rows = [
  {
    amount: 100,
    "due-date": "2020-01-01",
    status: "DueStatus.pending",
    reason: "Hostel",
    createdAt: "2020-03-09",
  },
  {
    amount: 100,
    "due-date": "2020-01-01",
    status: "DueStatus.pending",
    reason: "Hostel",
    createdAt: "2020-03-09",
  },
  {
    amount: 100,
    "due-date": "2020-01-01",
    status: "DueStatus.pending",
    reason: "Hostel",
    createdAt: "2020-03-09",
  },
  {
    amount: 100,
    "due-date": "2020-01-01",
    status: "DueStatus.pending",
    reason: "Hostel",
    createdAt: "2020-03-09",
  },
  {
    amount: 100,
    "due-date": "2020-01-01",
    status: "DueStatus.pending",
    reason: "Hostel",
    createdAt: "2020-03-09",
  },
  {
    amount: 100,
    "due-date": "2020-01-01",
    status: "DueStatus.pending",
    reason: "Hostel",
    createdAt: "2020-03-09",
  },
  {
    amount: 100,
    "due-date": "2020-01-01",
    status: "DueStatus.pending",
    reason: "Hostel",
    createdAt: "2020-03-09",
  },
  {
    amount: 100,
    "due-date": "2020-01-01",
    status: "DueStatus.pending",
    reason: "Hostel",
    createdAt: "2020-03-09",
  },
  {
    amount: 100,
    "due-date": "2020-01-01",
    status: "DueStatus.pending",
    reason: "Hostel",
    createdAt: "2020-03-09",
  },
  {
    amount: 100,
    "due-date": "2020-01-01",
    status: "DueStatus.pending",
    reason: "Hostel",
    createdAt: "2020-03-09",
  },
];

const columns = [
  {
    id: "reason",
    label: "Department",
    minWidth: 100,
  },
  {
    id: "amount",
    label: "Amount",
    minWidth: 100,
  },
  {
    id: "due-date",
    label: "Due Date",
    minWidth: 100,
  },
];

export default function StickyHeadTable() {
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
    <div class="container mx-auto">
        <div class="w-full overflow-hidden mt-10">
            <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                    {columns.map((column) => (
                        <TableCell
                        key={column.id}
                        align={column.align}
                        className="min-w-[100px]"
                        >
                        {column.label}
                        </TableCell>
                    ))}
                    <TableCell>Details</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, rowIndex) => {
                        return (
                        <TableRow hover tabIndex={-1} key={rowIndex}>
                            {columns.map((column) => {
                            const value = row[column.id];
                            return (
                                <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === "number"
                                    ? column.format(value)
                                    : value}
                                </TableCell>
                            );
                            })}
                            <TableCell>
                                <IconButton>
                                    <MoreVertIcon onClick={(event) => handleMenuOpen(event, row)}/>
                                </IconButton>
                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl && selectedRow === row)}
                                onClose={handleMenuClose}
                            >
                                {Object.keys(row).map((key) => {
                                if (!columns.some((column) => column.id === key)) {
                                    return (
                                    <MenuItem key={key} onClick={handleMenuClose}>
                                        <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {row[key]}
                                    </MenuItem>
                                    );
                                }
                                return null;
                                })}
                            </Menu>
                            </TableCell>
                        </TableRow>
                        );
                    })}
                </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[2, 5, 10]}
                component="div"
                count={rows.length}
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
