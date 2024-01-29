import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, TextField } from "@mui/material";

const Invoice = () => {
  //   const [rows, setRows] = useState([]);

  const [row, setRow] = useState({
    item: "",
    discription: "",
    unitPrice: 0,
    qty: 0,
    tax: 0,
    total: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRow((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (name === "tax") {
      setRow((prev) => ({
        ...prev,
        total: Number(prev.value1) + Number(prev.value2) + Number(prev.value3),
      }));
    }
  };

  //   useEffect(() => {
  //     setRow((prev) => ({
  //       ...prev,
  //       total: Number(prev.value1) + Number(prev.value2) + Number(prev.value3),
  //     }));
  //   }, [row.tax]);

  return (
    <Box sx={{ p: 5 }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Item</TableCell>
              <TableCell align="center">Discription</TableCell>
              <TableCell align="center">Unit Price</TableCell>
              <TableCell align="center">Qty</TableCell>
              <TableCell align="center">Tax</TableCell>
              <TableCell align="right">Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              key="item"
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <TextField
                  type="text"
                  name="item"
                  value={row.item}
                  onChange={handleInputChange}
                />
              </TableCell>
              <TableCell align="right">
                <TextField
                  type="text"
                  name="discription"
                  value={row.discription}
                  onChange={handleInputChange}
                />
              </TableCell>
              <TableCell align="right">
                <TextField
                  type="number"
                  name="unitPrice"
                  value={row.unitPrice}
                  onChange={handleInputChange}
                />
              </TableCell>
              <TableCell align="right">
                <TextField
                  type="number"
                  name="qty"
                  value={row.qty}
                  onChange={handleInputChange}
                />
              </TableCell>
              <TableCell align="right">
                <TextField
                  type="number"
                  name="tax"
                  value={row.tax}
                  onChange={handleInputChange}
                />
              </TableCell>
              <TableCell align="right">{row.total}</TableCell>
            </TableRow>
            <TableRow
              key={"Test"}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right">Total w/o tax</TableCell>
              <TableCell align="right">Total</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          width: "100% ",
          justifyContent: "center",
        }}
      >
        <Button
          disabled={false}
          sx={{ marginTop: 2 }}
          onClick={() => {
            console.log(row);
          }}
        >
          Add Item
        </Button>
      </Box>
    </Box>
  );
};

export default Invoice;
