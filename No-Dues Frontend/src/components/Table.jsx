import React, { useEffect, useState } from "react";
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
import GenericModal from "./GenericModal";
import CreateDueForm from "./CreateDueForm";

export default function StickyHeadTable({ rows, columns, isDep }) {
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
                  <TableCell>Details</TableCell>
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
                          const value = row[column.id];
                          if (column.id == 'status' && isDep == false) {
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {row.status === "success" ? (
                                  <Button disabled={true} variant="contained" style={{ backgroundColor: "green", color: "white" }}>
                                    {row.status}
                                  </Button>
                                ) : row.status === "pending" ? (
                                  <Button disabled={true} variant="contained" style={{ backgroundColor: "purple", color: "white" }}>
                                    {row.status}
                                  </Button>
                                ) : row.status === "rejected" ? (
                                  <Button disabled={true} variant="contained" style={{ backgroundColor: "red", color: "white" }}>
                                    {row.status}
                                  </Button>
                                ) : (
                                  row.status
                                )}
                              </TableCell>
                            )
                          } else {
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === "number"
                                  ? column.format(value)
                                  : value}
                              </TableCell>
                            );
                          }
                        })}
                        <TableCell>
                          {isDep && <IconButton onClick={(event) => handleMenuOpen(event, row)}>
                            <MoreVertIcon />
                          </IconButton>}
                          {isDep ? <Menu
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
                          </Menu> : <GenericModal
                            buttonName="Open Modal"
                            modalTitle="Example Modal"
                          >
                            <CreateDueForm />
                          </GenericModal>}
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
